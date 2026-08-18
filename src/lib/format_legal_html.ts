const tableHeaders: Array<{ columns: number; labels: string[] }> = [
    { columns: 2, labels: ['항목', '내용', 'Item', 'Details', '項目', '内容'] },
    { columns: 2, labels: ['유형', '예시', 'Type', 'Examples', 'タイプ', '例'] },
    { columns: 2, labels: ['권한', '구분', 'Permission', 'Classification', '権限', '区分'] },
    { columns: 2, labels: ['구분', '내용', 'Category', 'Details', '区分', '内容'] },
    { columns: 3, labels: ['행위', '일반적 처리 예시', '중대한 경우', 'Conduct', 'Typical action', 'Serious cases', '行為', '一般的な処理例', '重大な場合'] },
    { columns: 3, labels: ['기록', '보관기간', '근거', 'Record', 'Retention period', 'Basis', '記録', '保管期間', '根拠'] },
    { columns: 3, labels: ['수탁자', '위탁업무', '보유·이용기간', 'Trustee', 'Delegated work', 'Retention/use period', '受託者', '委託業務', '保有・利用期間'] },
    { columns: 3, labels: ['권한', '구분', '이용 목적', 'Permission', 'Classification', 'Purpose', '権限', '区分', '利用目的'] },
    { columns: 3, labels: ['서비스', '개인위치정보 이용 목적', '개인위치정보 보유기준', 'Service', 'Purpose of using personal location information', 'Personal location information retention standard', 'サービス', '個人位置情報の利用目的', '個人位置情報の保有基準'] },
    { columns: 4, labels: ['서비스', '이용 목적', '위치정보 이용방식', '보유기준', 'Service', 'Purpose', 'How location data is used', 'Retention', 'サービス', '利用目的', '位置情報の利用方法', '保有基準'] },
    { columns: 4, labels: ['처리 목적', '처리 항목', '법적 근거·목적', '보유기간', 'Purpose', 'Data processed', 'Legal basis/purpose', 'Retention period', '処理目的', '処理項目', '法的根拠・目的', '保有期間'] },
    { columns: 8, labels: ['이전받는 자', '국가/지역', '이전 항목', '시점·방법', '목적', '보유기간', '이전 근거·거부방법 및 효과', '문의처', '연락처'] },
];

const decodeText = (value: string) => value
    .replace(/<[^>]+>/g, '')
    .replace(/&#183;|&middot;/g, '·')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();

function findColumnCount(cells: string[]) {
    for (const candidate of tableHeaders) {
        const firstRow = cells.slice(0, candidate.columns).map(decodeText);
        if (firstRow.length === candidate.columns && firstRow.every((cell) => candidate.labels.includes(cell))) {
            return candidate.columns;
        }
    }
    return 0;
}

function makeTable(paragraphs: string[], columns: number) {
    const firstNote = paragraphs.findIndex((paragraph) => decodeText(paragraph).startsWith('※'));
    const tableCandidateCount = firstNote === -1 ? paragraphs.length : firstNote;
    const tableCellCount = Math.floor(tableCandidateCount / columns) * columns;
    if (tableCellCount < columns * 2) return null;

    const tableParagraphs = paragraphs.slice(0, tableCellCount);
    const trailingParagraphs = paragraphs.slice(tableCellCount);
    const cells = tableParagraphs.map((paragraph) => paragraph.replace(/^<p>/, '').replace(/<\/p>$/, ''));
    const head = cells.slice(0, columns);
    const body = cells.slice(columns);
    const rows: string[] = [];
    for (let index = 0; index < body.length; index += columns) {
        rows.push(`<tr>${body.slice(index, index + columns).map((cell) => `<td>${cell}</td>`).join('')}</tr>`);
    }
    const table = `<div class="terms-table-wrap" role="region" aria-label="정책 정보 표" tabindex="0"><table class="terms-table"><thead><tr>${head.map((cell) => `<th scope="col">${cell}</th>`).join('')}</tr></thead><tbody>${rows.join('')}</tbody></table></div>`;
    return `${table}${trailingParagraphs.join('')}`;
}

export function formatLegalHtml(html: string) {
    if (!html.includes('class="terms-document"')) return html;

    let formatted = html.replace(
        /(<div class="terms-document">\s*)<p>([^<]*(?:Announcement|Implementation|공고|시행|発表日|施行日)[^<]*)<\/p>/,
        '$1',
    );

    const plainParagraph = '<p>(?:(?!<\\/p>)[\\s\\S])*?<\\/p>';
    formatted = formatted.replace(new RegExp(`(?:${plainParagraph}\\s*){2,}`, 'g'), (run) => {
        const paragraphs = run.match(new RegExp(plainParagraph, 'g')) ?? [];
        for (let start = 0; start < paragraphs.length; start += 1) {
            const tableParagraphs = paragraphs.slice(start);
            const columns = findColumnCount(tableParagraphs);
            if (!columns) continue;
            const leadingParagraphs = paragraphs.slice(0, start).join('');
            return `${leadingParagraphs}${makeTable(tableParagraphs, columns) ?? tableParagraphs.join('')}`;
        }
        return run;
    });

    return formatted;
}
