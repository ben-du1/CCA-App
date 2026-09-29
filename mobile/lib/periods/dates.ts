interface Day {
    year: number,
    month: number,
    day: number
}

function parseDay(day: string): Day {
    const components = day.split("-").map(component => parseInt(component));
    return {
        year: components[0],
        month: components[1],
        day: components[2],
    };
}

export const LATE_START_DATES = [
    "2024-08-21",

    "2024-09-04",
    "2024-09-18",

    "2024-10-02",
    "2024-10-16",
    "2024-10-30",

    "2024-11-13",
    "2024-11-20",

    "2024-12-11",

    "2025-01-15",
    "2025-01-22",

    "2025-02-19",

    "2025-03-19",
    "2025-03-26",

    "2025-04-16",
    "2025-04-23",
    "2025-04-30",

    "2025-05-14",
    "2025-05-21",
].map(parseDay)

export const HOMEROOM_DATES = [
    "2024-08-15",
    "2024-08-22",
    "2024-08-29",

    "2024-09-05",
    "2024-09-12",
    "2024-09-26",

    "2024-10-03",
    "2024-10-18", // pep rally -- same schedule?
    "2024-10-24",
    "2024-10-31",

    "2024-11-07",
    "2024-11-21",

    "2024-12-05",
    "2024-12-12",

    "2025-01-09",
    "2025-01-16",
    "2025-01-23",

    "2025-02-06",
    "2025-02-13",
    "2025-02-20",
    "2025-02-27", // pep rally

    "2025-03-06",
    "2025-03-13",
    "2025-03-28", // pep rally

    "2025-04-17",

    "2025-05-01",
    "2025-05-08",
    "2025-05-15",
].map(parseDay)

export const EXTENDED_LUNCH_DATES = [
    "2024-09-20",
    "2024-11-15",
    "2025-04-25",
    "2025-05-23",
].map(parseDay)

export const HOLIDAY_DATES = [
    "2024-09-02", // Labor Day
    "2024-11-11", // Veterans Day

    // Fall Break
    "2024-11-25",
    "2024-11-26",
    "2024-11-27",
    "2024-11-28",
    "2024-11-29",

    // Winter Break
    "2024-12-20",
    "2024-12-23",
    "2024-12-24",
    "2024-12-25",
    "2024-12-26",
    "2024-12-27",
    "2024-12-30",
    "2024-12-31",
    "2025-01-01",
    "2025-01-02",
    "2025-01-03",
    "2025-01-06",
    "2025-01-07",

    "2025-01-20", // MLK Day

    // Presidents Day
    "2025-02-17",
    "2025-02-18",

    // Spring Break
    "2025-03-31",
    "2025-04-01",
    "2025-04-02",
    "2025-04-03",
    "2025-04-04",

    "2025-05-26", // Memorial Day
].map(parseDay)

export const FINALS_ODD_DATES = [
    "2024-10-10",
    "2024-12-18",
    "2025-03-17",
].map(parseDay)

export const FINALS_EVEN_DATES = [
    "2024-10-11",
    "2024-12-19",
    "2025-03-18",
].map(parseDay)

export const FINALS_LAST_DAY_DATES = [
    "2025-05-30"
].map(parseDay)
