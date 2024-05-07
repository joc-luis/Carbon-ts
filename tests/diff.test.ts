import {DateTime, TimeSpan, TimeZoneEnum} from "../src";

describe("difference of time test", () => {
    test("diff in milliseconds", () => {
        const dateTime = DateTime.now(TimeZoneEnum.AmericaMonterrey);
        const anotherDateTime = DateTime.now(TimeZoneEnum.AmericaMonterrey)
        const add = 10000;

        anotherDateTime.addMilliseconds(add)

        const diff = anotherDateTime.diffInMilliseconds(dateTime);

        expect(diff).toBe(add)
    })

    test("diff in seconds", () => {
        const dateTime = DateTime.now(TimeZoneEnum.AmericaMonterrey);
        const anotherDateTime = DateTime.now(TimeZoneEnum.AmericaMonterrey)
        const add = 60;

        anotherDateTime.addSeconds(add);

        const diff = anotherDateTime.diffInSeconds(dateTime);

        expect(diff).toBe(add)
    })

    test("diff in minutes", () => {
        const dateTime = DateTime.now(TimeZoneEnum.AmericaMonterrey);
        const anotherDateTime = DateTime.now(TimeZoneEnum.AmericaMonterrey)
        const add = 30;

        anotherDateTime.addMinutes(add);

        const diff = anotherDateTime.diffInMinutes(dateTime);

        expect(diff).toBe(add)
    })

    test("diff in hours", () => {
        const dateTime = DateTime.now(TimeZoneEnum.AmericaMonterrey);
        const anotherDateTime = DateTime.now(TimeZoneEnum.AmericaMonterrey)
        const add = 30;

        anotherDateTime.addHours(add);

        const diff = anotherDateTime.diffInHours(dateTime);

        expect(diff).toBe(add)
    })

    test("diff in days", () => {
        const dateTime = DateTime.now(TimeZoneEnum.AmericaMonterrey);
        const anotherDateTime = DateTime.now(TimeZoneEnum.AmericaMonterrey)
        const add = 30;

        anotherDateTime.addDays(add);

        const diff = anotherDateTime.diffInDays(dateTime);

        expect(diff).toBe(add)
    })

    test("diff in years", () => {
        const dateTime = DateTime.now(TimeZoneEnum.AmericaMonterrey);
        const anotherDateTime = DateTime.now(TimeZoneEnum.AmericaMonterrey)
        const add = 30;

        anotherDateTime.addYears(add);

        const diff = anotherDateTime.diffInYears(dateTime);

        expect(diff).toBe(add)
    })

    test("diff in time", () => {
        const dateTime = DateTime.now(TimeZoneEnum.AmericaMonterrey);
        const anotherDateTime = DateTime.now(TimeZoneEnum.AmericaMonterrey)
        const add = 30;

        anotherDateTime.addMillisecond();
        anotherDateTime.addSecond();
        anotherDateTime.addMinute();
        anotherDateTime.addHour();
        anotherDateTime.addDay();
        const diff = anotherDateTime.diffInTime(dateTime);

        expect(diff).toBe({
            days :1,
            hours: 1,
            minutes: 1,
            seconds: 1,
            milliseconds: 1
        }as TimeSpan)
    })
})