/**
 *
 */
import {DateTime, TimeZoneEnum} from "../src";

describe("Formats", () => {
    test("Date format", () => {
        const dateTime: DateTime = DateTime.now();
        const date = new Date()
        expect(dateTime.getDate()).toBe(`${date.getFullYear()}-${date.getMonth() + 1 <= 9 ? '0' : ''}${date.getMonth() + 1}-${date.getDate() + 1 <= 9 ? '0' : ''}${date.getDate()}`)
    })

    test("Time format", () => {
        const dateTime: DateTime = DateTime.now(TimeZoneEnum.AmericaMonterrey);
        const date = new Date()
        expect(dateTime.getTime()).toBe(`${date.getHours() <= 9 ? '0' : ''}${date.getHours()}:${date.getMinutes() <= 9 ? '0' : ''}${date.getMinutes()}:${date.getSeconds() + 1 <= 9 ? '0' : ''}${date.getSeconds()}`)
    })

    test("ISO format", () => {
            const dateTime : DateTime = DateTime.now(TimeZoneEnum.AsiaTokyo);
            console.log(dateTime.toISO())
        }
    )
})