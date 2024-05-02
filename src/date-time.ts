import {TimeZoneEnum} from "./enum/time-zone-enum";
import {TimeSpan} from "./interfaces/time-span";
import {LocaleEnum} from "./enum/locale-enum";

export class DateTime {
    private dateTime: Date = new Date();
    private timeZone: TimeZoneEnum = TimeZoneEnum.UTC;
    private locale: LocaleEnum = LocaleEnum.enUS;
    private convertToTimezone(): Date {
        return new Date(this.dateTime.toLocaleString(this.locale as string, {timeZone: this.timeZone as string}));
    }

    constructor(timeZone: TimeZoneEnum = TimeZoneEnum.UTC, locale: LocaleEnum = LocaleEnum.enUS) {
        this.dateTime = new Date();
        this.timeZone = timeZone;
        this.locale = locale;
    }

    /**
     * Create a new instance of DateTime with current time and selected timezone;
     * @param timeZone Time zone for the instance
     * @param locale Time zone for the instance
     */

    public static now(timeZone: TimeZoneEnum = TimeZoneEnum.UTC, locale: LocaleEnum = LocaleEnum.enUS): DateTime {
        return new DateTime(timeZone, locale)
    }

    public changeTimeZone(timeZone: TimeZoneEnum, locale: LocaleEnum) {
        this.timeZone = timeZone;
        this.locale = locale;
    }

    public setDateTime(year: number, month: number, day: number, hour: number, minute: number, second: number): void {
        this.dateTime = new Date(year, month - 1, day, hour, minute, second);
    }

    public addSecond(): void {
        this.dateTime.setSeconds(this.dateTime.getSeconds() + 1);
    }

    public addSeconds(seconds: number) {
        this.dateTime.setSeconds(this.dateTime.getSeconds() + seconds);
    }

    public addMinute(): void {
        this.dateTime.setMinutes(this.dateTime.getMinutes() + 1);
    }

    public addMinutes(minutes: number) {
        this.dateTime.setMinutes(this.dateTime.getMinutes() + minutes);
    }

    public addHour(): void {
        this.dateTime.setHours(this.dateTime.getHours() + 1);
    }

    public addHours(minutes: number) {
        this.dateTime.setHours(this.dateTime.getHours() + minutes);
    }


    public addDay(): void {
        this.dateTime.setDate(this.dateTime.getDate() + 1);
    }

    public addDays(days: number) {
        this.dateTime.setDate(this.dateTime.getDate() + days);
    }

    public addMonth(): void {
        this.dateTime.setMonth(this.dateTime.getMonth() + 1);
    }

    public addMonths(months: number) {
        this.dateTime.setMonth(this.dateTime.getMonth() + months);
    }

    public addYear(): void {
        this.dateTime.setMonth(this.dateTime.getMonth() + 12);
    }

    public addYears(years: number) {
        this.dateTime.setMonth(this.dateTime.getMonth() + (12 * years));
    }

    public getTimeZone(): TimeZoneEnum {
        return this.timeZone;
    }

    public getSecond(): number {
        return this.convertToTimezone().getSeconds();
    }

    public getMinute(): number {
        return this.convertToTimezone().getMinutes();
    }

    public getHour(): number {
        return this.convertToTimezone().getHours();
    }

    public getDay(): number {
        return this.convertToTimezone().getDay();
    }

    public getDayName(): string {
        switch (this.dateTime.toString().split(" ")[0]) {
            case "Mon":
                return "Monday"
            case "Tuesday":
                return "Tue";
            case "Wed":
                return "Wednesday";
            case "Thu":
                return "Thursday";
            case "Fri":
                return "Friday";
            case "Sat":
                return "Saturday";
            case "Sunday":
                return "Sunday";
            default:
                throw new Error()
        }
    }

    public getMonth(): number {
        return this.convertToTimezone().getMonth() + 1;
    }

    public getMonthName(): string {
        switch (this.convertToTimezone().getMonth()) {
            case 0:
                return "January";
            case 1:
                return "February";
            case 2:
                return "March";
            case 3:
                return "April";
            case 4:
                return "May";
            case 5:
                return "June";
            case 6:
                return "July";
            case 7:
                return "August";
            case 8:
                return "September";
            case 9:
                return "October";
            case 10:
                return "November"
            case 11:
                return "December";
            default:
                throw new Error("Oncember");

        }
    }

    public getYear(): number {
        return this.convertToTimezone().getFullYear();
    }

    public getTotalMilliseconds(): number {
        return this.convertToTimezone().getTime();
    }

    public getTotalSeconds(): number {
        return parseFloat(Number(this.convertToTimezone().getTime() / 1000).toFixed(2));
    }

    public getTotalMinutes(): number {
        return parseFloat(Number(this.convertToTimezone().getTime() / (1000 * 60)).toFixed(2));
    }

    public getTotalHours(): number {
        return parseFloat(Number(this.convertToTimezone().getTime() / (1000 * 3600)).toFixed(2));
    }

    public getTotalDays(): number {
        return parseFloat(Number(this.convertToTimezone().getTime() / ((1000 * 3600) * 24)).toFixed(2));
    }

    public getTotalMonths(): number {
        return this.convertToTimezone().getUTCMonth()
    }

    public getTotalYears(): number {
        return this.convertToTimezone().getUTCFullYear()
    }

    public diffInMilliseconds(dateTime: DateTime): number {
        return this.getTotalMilliseconds() - dateTime.getTotalMilliseconds();
    }

    public diffInSeconds(dateTime: DateTime): number {
        return this.getTotalSeconds() - dateTime.getTotalSeconds();
    }

    public diffInMinutes(dateTime: DateTime): number {
        return this.getTotalMinutes() - dateTime.getTotalMinutes();
    }

    public diffInHours(dateTime: DateTime): number {
        return this.getTotalHours() - dateTime.getTotalHours();
    }

    public diffInDays(dateTime: DateTime): number {
        return this.getTotalDays() - dateTime.getTotalDays();
    }

    public diffInMonths(dateTime: DateTime): number {
        return this.getTotalMonths() - dateTime.getTotalMonths();
    }

    public diffInYears(dateTime: DateTime): number {
        return this.getYear() - dateTime.getYear();
    }


    public diffInTime(dateTime: DateTime): TimeSpan {
        let total = this.getTotalMilliseconds() - dateTime.getTotalMilliseconds()
        const timeSpan: TimeSpan = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            milliseconds: 0,
        }

        while (total > 0) {
            if (total >= ((3600 * 1000) * 24)) {
                timeSpan.days += 1;
                total -= ((3600 * 1000) * 24);
            } else if (total >= (3600 * 1000)) {
                timeSpan.hours += 1;
                total -= (3600 * 1000);
            } else if (total >= (60 * 1000)) {
                timeSpan.minutes += 1;
                total -= (60 * 1000);
            } else if (total >= (1000)) {
                timeSpan.seconds += 1;
                total -= (1000);
            } else if (total <= 1000) {
                timeSpan.milliseconds = total;
                total = 0;
            }
        }

        return timeSpan;
    }

    public toString(): string {
        return this.convertToTimezone().toLocaleString()
    }

    public getTime(): string {
        return this.convertToTimezone().toLocaleTimeString()
    }

    public getDate(): string {
        return this.convertToTimezone().toLocaleDateString()
    }


}