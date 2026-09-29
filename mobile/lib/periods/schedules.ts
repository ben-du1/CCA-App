import { EXTENDED_LUNCH_DATES, FINALS_EVEN_DATES, FINALS_LAST_DAY_DATES, FINALS_ODD_DATES, HOLIDAY_DATES, HOMEROOM_DATES, LATE_START_DATES } from "./dates";
import { DEFAULT_PERIOD, EMPTY_SCHEDULE, EXTENDED_LUNCH_SCHEDULE, FINALS_EVEN_SCHEDULE, FINALS_LAST_DAY_SCHEDULE, FINALS_ODD_SCHEDULE, HOMEROOM_SCHEDULE, LATE_START_SCHEDULE, NORMAL_SCHEDULE } from "./periods";

const SPECIAL_DATE_SCHEDULE_MAP = [
    {
        dates: LATE_START_DATES,
        periods: LATE_START_SCHEDULE
    },
    {
        dates: HOMEROOM_DATES,
        periods: HOMEROOM_SCHEDULE
    },
    {
        dates: EXTENDED_LUNCH_DATES,
        periods: EXTENDED_LUNCH_SCHEDULE
    },
    {
        dates: FINALS_ODD_DATES,
        periods: FINALS_ODD_SCHEDULE
    },
    {
        dates: FINALS_EVEN_DATES,
        periods: FINALS_EVEN_SCHEDULE
    },
    {
        dates: FINALS_LAST_DAY_DATES,
        periods: FINALS_LAST_DAY_SCHEDULE
    },
    {
        dates: HOLIDAY_DATES,
        periods: EMPTY_SCHEDULE
    }
];

function getCurrentSchedule(date?: Date) {
    const now = date ?? new Date();

    if (now.getDay() == 0 || now.getDay() == 6) {
        // Weekend -- no school
        return EMPTY_SCHEDULE;
    }

    for (const { dates, periods } of SPECIAL_DATE_SCHEDULE_MAP) {
        for (const date of dates) {
            if (date.day === now.getDate()
                && date.month === now.getMonth() + 1
                && date.year === now.getFullYear()) {
                return periods;
            }
        }
    }

    return NORMAL_SCHEDULE;
}

export function getCurrentPeriod(date?: Date) {
    const now = date ?? new Date();
    
    const schedule = getCurrentSchedule(now);
    const minutesNow = now.getHours() * 60 + now.getMinutes();
    for (const period of schedule) {
        const minutesStart = period.startTime.hour * 60 + period.startTime.minute;
        const minutesEnd = period.endTime.hour * 60 + period.endTime.minute;

        if (minutesStart <= minutesNow && minutesNow < minutesEnd) {
            return period;
        }
    }

    return DEFAULT_PERIOD;
}
