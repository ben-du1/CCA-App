interface RawPeriod {
    title: string,
    startTime: string,
    endTime: string,
}

interface Time {
    hour: number,
    minute: number,
}

export interface Period {
    title: string,
    startTime: Time,
    endTime: Time,
}

function parsePeriod(period: RawPeriod): Period {
    return {
        title: period.title,
        startTime: {
            hour: parseInt(period.startTime.split(":")[0]),
            minute: parseInt(period.startTime.split(":")[1]),
        },
        endTime: {
            hour: parseInt(period.endTime.split(":")[0]),
            minute: parseInt(period.endTime.split(":")[1]),
        },
    };
}

export const DEFAULT_PERIOD = {
    title: "School is over!",
    startTime: { hour: 0, minute: 0 },
    endTime: { hour: 0, minute: 0 },
};

export const EMPTY_SCHEDULE: Period[] = [];

export const NORMAL_SCHEDULE = [
    {
        title: "Period 1",
        startTime: "8:30",
        endTime: "10:00",
    },
    {
        title: "Passing Period",
        startTime: "10:00",
        endTime: "10:08",
    },
    {
        title: "Period 2",
        startTime: "10:08",
        endTime: "11:42",
    },
    {
        title: "Lunch",
        startTime: "11:42",
        endTime: "12:14",
    },
    {
        title: "Passing Period",
        startTime: "12:14",
        endTime: "12:22",
    },
    {
        title: "Period 3",
        startTime: "12:22",
        endTime: "13:52",
    },
    {
        title: "Passing Period",
        startTime: "13:52",
        endTime: "14:00",
    },
    {
        title: "Period 4",
        startTime: "14:00",
        endTime: "15:30",
    },
].map(parsePeriod)

export const HOMEROOM_SCHEDULE = [
    {
        title: "Period 1",
        startTime: "8:30",
        endTime: "9:50",
    },
    {
        title: "Passing Period",
        startTime: "9:50",
        endTime: "9:58",
    },
    {
        title: "Period 2",
        startTime: "9:58",
        endTime: "11:18",
    },
    {
        title: "Passing Period",
        startTime: "11:18",
        endTime: "11:26",
    },
    {
        title: "Homeroom",
        startTime: "11:26",
        endTime: "12:01",
    },
    {
        title: "Lunch",
        startTime: "12:01",
        endTime: "12:34",
    },
    {
        title: "Passing Period",
        startTime: "12:34",
        endTime: "12:42",
    },
    {
        title: "Period 3",
        startTime: "12:42",
        endTime: "14:02",
    },
    {
        title: "Passing Period",
        startTime: "14:02",
        endTime: "14:10",
    },
    {
        title: "Period 4",
        startTime: "14:10",
        endTime: "15:30",
    },
].map(parsePeriod)

export const LATE_START_SCHEDULE = [
    {
        title: "Period 1",
        startTime: "10:00",
        endTime: "11:07",
    },
    {
        title: "Passing Period",
        startTime: "11:07",
        endTime: "11:15",
    },
    {
        title: "Period 2",
        startTime: "11:15",
        endTime: "12:26",
    },
    {
        title: "Lunch",
        startTime: "12:26",
        endTime: "1:00",
    },
    {
        title: "Passing Period",
        startTime: "1:00",
        endTime: "1:08",
    },
    {
        title: "Period 3",
        startTime: "1:08",
        endTime: "2:15",
    },
    {
        title: "Passing Period",
        startTime: "2:15",
        endTime: "2:23",
    },
    {
        title: "Period 4",
        startTime: "2:23",
        endTime: "3:30",
    },
].map(parsePeriod)

export const EXTENDED_LUNCH_SCHEDULE = [
    {
        title: "Period 1",
        startTime: "8:30",
        endTime: "9:57",
    },
    {
        title: "Passing Period",
        startTime: "9:57",
        endTime: "10:05",
    },
    {
        title: "Period 2",
        startTime: "10:05",
        endTime: "11:32",
    },
    {
        title: "Lunch",
        startTime: "11:32",
        endTime: "12:19",
    },
    {
        title: "Passing Period",
        startTime: "12:19",
        endTime: "12:27",
    },
    {
        title: "Period 3",
        startTime: "12:27",
        endTime: "13:54",
    },
    {
        title: "Passing Period",
        startTime: "13:54",
        endTime: "14:02",
    },
    {
        title: "Period 4",
        startTime: "14:02",
        endTime: "15:30",
    },
].map(parsePeriod)

export const FINALS_ODD_SCHEDULE = [
    {
        title: "Period 1",
        startTime: "8:30",
        endTime: "10:10",
    },
    {
        title: "Passing Period",
        startTime: "10:10",
        endTime: "10:18",
    },
    {
        title: "Period 2",
        startTime: "10:18",
        endTime: "11:05",
    },
    {
        title: "Lunch",
        startTime: "11:05",
        endTime: "11:37",
    },
    {
        title: "Passing Period",
        startTime: "11:37",
        endTime: "11:45",
    },
    {
        title: "Period 3",
        startTime: "11:45",
        endTime: "13:25",
    },
    {
        title: "Passing Period",
        startTime: "13:25",
        endTime: "13:33",
    },
    {
        title: "Period 4",
        startTime: "13:33",
        endTime: "14:20",
    },
].map(parsePeriod)

export const FINALS_EVEN_SCHEDULE = [
    {
        title: "Period 1",
        startTime: "8:30",
        endTime: "9:17",
    },
    {
        title: "Passing Period",
        startTime: "9:17",
        endTime: "9:25",
    },
    {
        title: "Period 2",
        startTime: "9:25",
        endTime: "11:05",
    },
    {
        title: "Lunch",
        startTime: "11:05",
        endTime: "11:37",
    },
    {
        title: "Passing Period",
        startTime: "11:37",
        endTime: "11:45",
    },
    {
        title: "Period 3",
        startTime: "11:45",
        endTime: "12:32",
    },
    {
        title: "Passing Period",
        startTime: "12:32",
        endTime: "12:40",
    },
    {
        title: "Period 4",
        startTime: "12:40",
        endTime: "14:20",
    },
].map(parsePeriod)

export const FINALS_LAST_DAY_SCHEDULE = [
    {
        title: "Period 1",
        startTime: "8:30",
        endTime: "9:35",
    },
    {
        title: "Passing Period",
        startTime: "9:35",
        endTime: "9:43",
    },
    {
        title: "Period 2",
        startTime: "9:43",
        endTime: "10:48",
    },
    {
        title: "Lunch",
        startTime: "10:48",
        endTime: "11:20",
    },
    {
        title: "Passing Period",
        startTime: "11:20",
        endTime: "11:28",
    },
    {
        title: "Period 3",
        startTime: "11:28",
        endTime: "12:33",
    },
    {
        title: "Passing Period",
        startTime: "12:33",
        endTime: "12:41",
    },
    {
        title: "Period 4",
        startTime: "12:41",
        endTime: "13:46",
    },
].map(parsePeriod)
