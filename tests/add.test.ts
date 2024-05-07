import {DateTime, TimeZoneEnum} from "../src";

/**
 *
 */
describe("Add time function´s", () => {

    test("Add a second", () => {
        const date = new Date()
        date.setUTCSeconds(date.getUTCSeconds() + 1)

        const dateTime: DateTime = DateTime.now();

        dateTime.addSecond()
        expect(dateTime.getSeconds()).toBe(date.getUTCSeconds());
    })

    test("Subtract second", () => {
        const dateTime: DateTime = DateTime.now();
        const date = new Date()
        date.setSeconds(date.getSeconds() - 1)

        dateTime.addSeconds(-1);
        expect(dateTime.getSeconds()).toBe(date.getSeconds());
    })

    test("Add a minute", () => {
        const dateTime: DateTime = DateTime.now();
        const date = new Date()
        date.setMinutes(date.getMinutes() + 1)

        dateTime.addMinute()
        expect(dateTime.getMinutes()).toBe(date.getMinutes());
    })

    test("Subtract minute", () => {
        const dateTime: DateTime = DateTime.now();
        const date = new Date()
        date.setMinutes(date.getMinutes() - 1)

        dateTime.addMinutes(-1);
        expect(dateTime.getMinutes()).toBe(date.getMinutes());
    })

    test("Add a hour", () => {
        const dateTime: DateTime = DateTime.now();
        const date = new Date()
        date.setHours(date.getHours() + 1)

        dateTime.addHour()
        expect(dateTime.getHours()).toBe(date.getHours());
    })

    test("Subtract hour", () => {
        const dateTime: DateTime = DateTime.now();
        const hour = dateTime.getHours() == 0 ? 23 : dateTime.getHours() - 1;
        dateTime.addHours(-1);
        expect(dateTime.getHours()).toBe(hour);
    })

    test("Add a day", () => {
        const dateTime: DateTime = DateTime.now();
        const date = new Date()
        date.setDate(date.getDate() + 1)

        dateTime.addDay()
        expect(dateTime.getDay()).toBe(date.getDate());
    })

    test("Subtract day", () => {
        const dateTime: DateTime = DateTime.now();
        const date = new Date()
        date.setDate(date.getDate() - 1)

        dateTime.addDays(-1);
        expect(dateTime.getDay()).toBe(date.getDate());
    })

    test("Add a week", () => {
        const date = new Date()
        date.setDate(date.getDate() + 7)
        const dateTime: DateTime = DateTime.now();
        dateTime.addWeek();
        expect(dateTime.getDay()).toBe(date.getDate());
    })

    test("Subtract week", () => {
        const date = new Date()
        date.setDate(date.getDate() - 7);
        const dateTime: DateTime = DateTime.now();
        dateTime.addWeeks(-1);
        expect(dateTime.getDay()).toBe(date.getDate());
    })

    test("Add a month", () => {
        const date = new Date()
        date.setMonth(date.getMonth() + 2)
        const dateTime: DateTime = DateTime.now();
        dateTime.addMonth();
        expect(dateTime.getMonth()).toBe(date.getMonth());
    })

    test("Subtract month", () => {
        const date = new Date()
        date.setMonth(date.getMonth() + 1 - 1)
        const dateTime: DateTime = DateTime.now();
        dateTime.addMonths(-1);
        expect(dateTime.getMonth()).toBe(date.getMonth());
    })

    test("Add a year", () => {
        const date = new Date()
        date.setFullYear(date.getFullYear() + 1)
        const dateTime: DateTime = DateTime.now();
        dateTime.addYear();
        expect(dateTime.getYear()).toBe(date.getFullYear());
    })

    test("Subtract year", () => {
        const date = new Date()
        date.setFullYear(date.getFullYear() - 1)
        const dateTime: DateTime = DateTime.now();
        dateTime.addYears(-1);
        expect(dateTime.getYear()).toBe(date.getFullYear());
    })

})



