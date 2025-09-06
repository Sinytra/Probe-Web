import { format, intervalToDuration } from 'date-fns';

export const ICON_CHECK = '\u2705';
export const ICON_X = '\u274C';
export const ICON_WARN = '\u26A0\uFE0F';
export const ICON_TEST = '\uD83E\uDDEA';
export const ICON_EXCLAMATION = '\u2757';

export const GITHUB_LINK_CONNECTOR = 'https://github.com/Sinytra/Connector';
export const DISCORD_LINK = 'https://discord.sinytra.org';

export function formatDateTime(utcString: string): string {
	const date = new Date(utcString);
	return format(date, 'yyyy-MM-dd HH:mm');
}

export function formatSeconds(seconds: number) {
	if (seconds < 1) {
		return '0 sec';
	}

	const duration = intervalToDuration({ start: 0, end: seconds * 1000 });

	const parts = [];
	if (duration.hours) parts.push(`${duration.hours} h`);
	if (duration.minutes) parts.push(`${duration.minutes} min`);
	if (duration.seconds || parts.length === 0) parts.push(`${duration.seconds} sec`);

	return parts.join(' ');
}

export interface ReleaseInfo {
	version: string;
	mcVersion: string;
}

export function getReleaseNameInfo(tag: string): ReleaseInfo {
	const parts = tag.split('+');
	return { version: parts[0], mcVersion: parts[1] };
}
