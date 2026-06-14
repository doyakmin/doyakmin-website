import { abnormalLogoutNotice20251023 } from './abnormal-logout-notice-2025-10-23';
import { antiCheatNotice20251006 } from './anti-cheat-notice-2025-10-06';
import { emergencyNotice20250909 } from './emergency-notice-2025-09-09';
import { eventEndNotice20251107 } from './event-end-notice-2025-11-07';
import { hangukjiBetaEvent } from './hangukji-beta-event';
import { privacyPolicy } from './privacy-policy';
import { termsOfService } from './terms-of-service';
import { unPeaceFestival20251025 } from './un-peace-festival-2025-10-25';
import { winnerAnnouncement20251109 } from './winner-announcement-2025-11-09';

export const allNewsPosts = [
  winnerAnnouncement20251109,
  eventEndNotice20251107,
  unPeaceFestival20251025,
  abnormalLogoutNotice20251023,
  antiCheatNotice20251006,
  emergencyNotice20250909,
  hangukjiBetaEvent,
  termsOfService,
  privacyPolicy,
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
