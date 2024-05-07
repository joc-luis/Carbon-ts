import {TimeZoneEnum} from "./enum/time-zone-enum";
import {TimeSpan} from "./interfaces/time-span";
import {LocaleEnum} from "./enum/locale-enum";
import {DateTimeFormatEnum} from "./enum/date-time-format-enum";

export class DateTime {
    private dateTime: Date = this.getUTCDate()
    private timeZone: TimeZoneEnum = TimeZoneEnum.UTC;
    private locale: LocaleEnum = LocaleEnum.enUS;

    private getUTCDate() {
        return new Date();
    }

    private convertToTimeZone(date: Date): Date {

        const dateTimeUtc: Date = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds()));

        if (this.timeZone == TimeZoneEnum.UTC) {
            return dateTimeUtc;
        }

        const timezone = Intl.DateTimeFormat(this.locale as string, {
            timeZone: this.timeZone as string,
            hour: "2-digit",
            hour12: false,
            minute: "2-digit",
            second: "2-digit",
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        });

        const dateFormat: string = timezone.format(date).split(", ")[0]
        const timeFormat: string = timezone.format(date).split(", ")[1]

        return new Date(Date.UTC(parseInt(dateFormat.split("/")[2]),
            parseInt(dateFormat.split("/")[0]) - 1,
            parseInt(dateFormat.split("/")[1]),
            parseInt(timeFormat.split(":")[0]),
            parseInt(timeFormat.split(":")[1]),
            parseInt(timeFormat.split(":")[2])))
    }

    private getDateTime(): Date {
        return this.convertToTimeZone(this.dateTime)
    }

    /**
     * Create a new instance with the specified time zone and format
     * @param timeZone Time zone for the instance
     * @param locale Specifies the format to use for the date
     */
    constructor(timeZone: TimeZoneEnum = TimeZoneEnum.UTC, locale: LocaleEnum = LocaleEnum.enUS) {
        this.dateTime = this.getUTCDate()
        this.timeZone = timeZone;
        this.locale = locale;
    }

    /**
     * Create a new instance with the specified time zone and format
     * @param timeZone Time zone for the instance
     * @param locale Specifies the format to use for the date
     *
     * @return A new instance of DateTime
     */
    public static now(timeZone: TimeZoneEnum = TimeZoneEnum.UTC, locale: LocaleEnum = LocaleEnum.enUS): DateTime {
        return new DateTime(timeZone, locale)
    }


    /**
     * Creates a new instance with the data entered.
     * @param year Year
     * @param month Month
     * @param day Day
     * @param hour Hour
     * @param minute Minute
     * @param second Second
     * @param timeZone Time zone for the instance
     * @param locale Specifies the format to use for the date
     *
     * @return A new instance of DateTime
     */
    public static initialize(year: number, month: number, day: number, hour: number, minute: number, second: number,
                             timeZone: TimeZoneEnum = TimeZoneEnum.UTC, locale: LocaleEnum = LocaleEnum.enUS): DateTime {
        const dateTime = new DateTime(timeZone, locale);
        dateTime.setDateTime(year, month, day, hour, minute, second);

        return dateTime;
    }

    /**
     * Initialize a date and time from a date object
     * @param date Value to assign
     * @param timeZone Time zone for the instance
     * @param locale Specifies the format to use for the date
     *
     * @return A new instance of DateTime
     */
    public static initializeFromDate(date: Date, timeZone: TimeZoneEnum = TimeZoneEnum.UTC, locale: LocaleEnum = LocaleEnum.enUS): DateTime {
        const dateTime = new DateTime(timeZone, locale);
        dateTime.setFromDate(date);

        return dateTime;
    }


    /**
     * Change the time zone and format
     * @param timeZone Time zone for the instance
     * @param locale Specifies the format to use for the date
     */
    public changeTimeZone(timeZone: TimeZoneEnum, locale: LocaleEnum): void {
        this.timeZone = timeZone;
        this.locale = locale;
    }

    /**
     * Assigns the date and time to the current instance
     * @param year Year
     * @param month Month
     * @param day Day
     * @param hour Hour
     * @param minute Minute
     * @param second Second
     */
    public setDateTime(year: number, month: number, day: number, hour: number, minute: number, second: number): void {
        this.dateTime = new Date(year, month - 1, day, hour, minute, second);
    }

    /**
     * Set the datetime from Date JS object
     *
     * @param date Value to assign
     */
    public setFromDate(date: Date) {
        this.dateTime = date;
    }


    /**
     * Add a millisecond to the current instance.
     */
    public addMillisecond(): void {
        this.dateTime.setMilliseconds(this.dateTime.getMilliseconds() + 1);
    }

    /**
     * Adds the specified seconds to the current instance
     * @param milliseconds Milliseconds to add
     */
    public addMilliseconds(milliseconds: number): void {
        this.dateTime.setMilliseconds(this.dateTime.getMilliseconds() + milliseconds);
    }


    /**
     * Add a second to the current instance.
     */
    public addSecond(): void {
        this.dateTime.setUTCSeconds(this.dateTime.getUTCSeconds() + 1);
    }

    /**
     * Adds the specified seconds to the current instance
     * @param seconds Seconds to add
     */
    public addSeconds(seconds: number) {
        this.dateTime.setUTCSeconds(this.dateTime.getUTCSeconds() + seconds);
    }

    /**
     * Add a minute to the current instance.
     */
    public addMinute(): void {
        this.dateTime.setUTCMinutes(this.dateTime.getUTCMinutes() + 1);
    }

    /**
     * Adds the specified minutes to the current instance
     * @param minutes Minutes to add
     */
    public addMinutes(minutes: number) {
        this.dateTime.setUTCMinutes(this.dateTime.getUTCMinutes() + minutes);
    }

    /**
     * Add an hour to the current instance.
     */
    public addHour(): void {
        this.dateTime.setUTCHours(this.dateTime.getUTCHours() + 1);
    }

    /**
     * Adds the specified hours to the current instance
     * @param hours Minutes to add
     */
    public addHours(hours: number) {
        this.dateTime.setUTCHours(this.dateTime.getUTCHours() + hours);
    }

    /**
     * Add a day to the current instance.
     */
    public addDay(): void {
        this.dateTime.setUTCDate(this.dateTime.getUTCDate() + 1);
    }

    /**
     * Adds the specified days to the current instance
     * @param days Minutes to add
     */
    public addDays(days: number) {
        this.dateTime.setUTCDate(this.dateTime.getUTCDate() + days);
    }

    /**
     * Add a day to the current instance.
     */
    public addWeek(): void {
        this.dateTime.setUTCDate(this.dateTime.getUTCDate() + 7);
    }

    /**
     * Adds the specified days to the current instance
     * @param weeks Weeks to add
     */
    public addWeeks(weeks: number) {
        this.dateTime.setUTCDate(this.dateTime.getUTCDate() + (weeks * 7));
    }

    /**
     * Add a month to the current instance.
     */
    public addMonth(): void {
        this.dateTime.setUTCMonth(this.dateTime.getUTCMonth() + 1);
    }

    /**
     * Adds the specified months to the current instance
     * @param months Minutes to add
     */
    public addMonths(months: number) {
        this.dateTime.setUTCMonth(this.dateTime.getUTCMonth() + months);
    }

    /**
     * Add a year to the current instance.
     */
    public addYear(): void {
        this.dateTime.setUTCMonth(this.dateTime.getUTCMonth() + 12);
    }

    /**
     * Adds the specified months to the current instance
     * @param years Minutes to add
     */
    public addYears(years: number) {
        this.dateTime.setUTCMonth(this.dateTime.getUTCMonth() + (12 * years));
    }

    /**
     * Get the current timezone for the instance
     * @return Return the timezone
     */
    public getTimeZone(): TimeZoneEnum {
        return this.timeZone;
    }

    /**
     * Get the current milliseconds
     * @return Get the milliseconds
     */
    public getMilliseconds(): number {
        return this.getDateTime().getUTCMilliseconds();
    }


    /**
     * Get the current second
     * @return Get the second
     */
    public getSeconds(): number {
        return this.getDateTime().getUTCSeconds();
    }

    /**
     * Get the current minute
     * @return Get the minute
     */
    public getMinutes(): number {
        return this.getDateTime().getUTCMinutes();
    }

    /**
     * Get the current hour
     * @return Get the hour
     */
    public getHours(): number {
        return this.getDateTime().getUTCHours();
    }

    /**
     * Get the current day
     * @return Get the day
     */
    public getDay(): number {
        return this.getDateTime().getUTCDate();
    }

    /**
     * Get the name of the current day
     * @return Name of the day
     */
    public getDayName(): string {
        switch (this.dateTime.toUTCString().toString().split(" ")[0]) {
            case "Mon":
                return "Monday"
            case "Tue":
                return "Tuesday";
            case "Wed":
                return "Wednesday";
            case "Thu":
                return "Thursday";
            case "Fri":
                return "Friday";
            case "Sat":
                return "Saturday";
            case "Sun":
                return "Sunday";
            default:
                throw new Error()
        }
    }

    /**
     * Get the current month
     * @return Get month
     */
    public getMonth(): number {
        return this.getDateTime().getUTCMonth() + 1;
    }


    /**
     * Get the name of the current
     * @return Name of the month
     */
    public getMonthName(): string {
        switch (this.getDateTime().getUTCMonth()) {
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


    /**
     * Get the current year
     * @return  year
     */
    public getYear(): number {
        return this.getDateTime().getUTCFullYear();
    }

    /**
     * Get the current year
     * @return  year
     */
    public getTotalMilliseconds(): number {
        return this.getDateTime().getTime();
    }


    /**
     * Get the difference in milliseconds of two dates
     * @param dateTime Date to compare
     * @param ignoreTimeZone Ignore time zone when comparing
     * @return Milliseconds of the difference.
     */
    public diffInMilliseconds(dateTime: DateTime, ignoreTimeZone: boolean = false): number {
        if (!ignoreTimeZone && this.getTimeZone() != dateTime.getTimeZone()) {
            throw new Error("Time zones are not the same")
        }
        return Number((this.getTotalMilliseconds() - dateTime.getTotalMilliseconds()).toFixed(2))
    }

    /**
     * Get the difference in seconds of two dates
     * @param dateTime Date to compare
     * @param ignoreTimeZone Ignore time zone when comparing
     * @return Seconds of the difference.
     */
    public diffInSeconds(dateTime: DateTime, ignoreTimeZone: boolean = false): number {
        if (!ignoreTimeZone && this.getTimeZone() != dateTime.getTimeZone()) {
            throw new Error("Time zones are not the same")
        }
        return Number(((this.getTotalMilliseconds() - dateTime.getTotalMilliseconds()) / 1000).toFixed(2));
    }

    /**
     * Get the difference in minutes of two dates
     * @param dateTime Date to compare
     * @param ignoreTimeZone Ignore time zone when comparing
     * @return Minutes of the difference.
     */
    public diffInMinutes(dateTime: DateTime, ignoreTimeZone: boolean = false): number {
        if (!ignoreTimeZone && this.getTimeZone() != dateTime.getTimeZone()) {
            throw new Error("Time zones are not the same")
        }
        return Number(((this.getTotalMilliseconds() - dateTime.getTotalMilliseconds()) / (1000 * 60)).toFixed(2));
    }

    /**
     * Get the difference in hours of two dates
     * @param dateTime Date to compare.
     * @param ignoreTimeZone Ignore time zone when comparing
     * @return Hours of the difference.
     */
    public diffInHours(dateTime: DateTime, ignoreTimeZone: boolean = false): number {
        if (!ignoreTimeZone && this.getTimeZone() != dateTime.getTimeZone()) {
            throw new Error("Time zones are not the same")
        }
        return Number(((this.getTotalMilliseconds() - dateTime.getTotalMilliseconds()) / (1000 * 60 * 60)).toFixed(2));
    }

    /**
     * Get the difference in days of two dates
     * @param dateTime Date to compare
     * @param ignoreTimeZone Ignore time zone when comparing
     * @return Days of the difference.
     */
    public diffInDays(dateTime: DateTime, ignoreTimeZone: boolean = false): number {
        if (!ignoreTimeZone && this.getTimeZone() != dateTime.getTimeZone()) {
            throw new Error("Time zones are not the same")
        }
        return Number(((this.getTotalMilliseconds() - dateTime.getTotalMilliseconds()) / (1000 * 60 * 60 * 24)).toFixed(2));
    }


    /**
     * Get the difference in years of two dates
     * @param dateTime Date to compare
     * @param ignoreTimeZone Ignore time zone when comparing
     * @return Years of the difference.
     */
    public diffInYears(dateTime: DateTime, ignoreTimeZone: boolean = false): number {
        if (!ignoreTimeZone && this.getTimeZone() != dateTime.getTimeZone()) {
            throw new Error("Time zones are not the same")
        }
        return Number((this.getYear() - dateTime.getYear()).toFixed(2));
    }

    /**
     * Get the difference in time of two dates
     * @param dateTime Date to compare
     * @param ignoreTimeZone Ignore time zone when comparing
     * @return A time range object with the difference between the two dates.
     */
    public diffInTime(dateTime: DateTime, ignoreTimeZone: boolean = false): TimeSpan {
        if (!ignoreTimeZone && this.getTimeZone() != dateTime.getTimeZone()) {
            throw new Error("Time zones are not the same")
        }

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

    /**
     * Get the datetime of the instance in the format of the locale
     *
     * @return Datetime of the current instance
     */
    public toString(): string {
        return this.getDateTime().toLocaleString()
    }

    /**
     * Get the time on 24 format
     *
     * @return Time of the current instance
     */
    public getTime(): string {

        const hour: number = this.getHours()
        const minute: number = this.getMinutes()
        const second: number = this.getSeconds();

        return `${hour <= 9 ? '0' : ''}${hour > 23 ? "00" : hour}:${minute <= 9 ? '0' : ''}${minute}:${second <= 9 ? '0' : ''}${second}`

    }

    /**
     * Get the date
     *
     * @return Date of the current instance
     */
    public getDate(): string {
        const year = this.getYear();
        const month = this.getMonth();
        const day = this.getDay();

        return `${year}-${month <= 9 ? '0' : ''}${month}-${day <= 9 ? '0' : ''}${day}`

    }

    /**
     * Get the datetime on ISO format.
     *
     * @return Datetime of the current instance
     */
    public toISO() {
        return this.getDateTime().toISOString()
    }

    /**
     * Get the datetime in the specific format
     * @param format format string
     *
     * @return The date and time of the instance in the specified format
     */
    public toFormat(format: string): string {
        return format
            .replace(DateTimeFormatEnum.FullYear as string, this.getYear().toString())
            .replace(DateTimeFormatEnum.TwoDigitsYear as string, this.getYear().toString().substring(2))
            .replace(DateTimeFormatEnum.TwoDigitsMonth as string, this.getMonth() <= 9 ? `0${this.getMonth()}` : this.getMonth().toString())
            .replace(DateTimeFormatEnum.Month as string, this.getMonth().toString())
            .replace(DateTimeFormatEnum.TwoDigitsDay as string, this.getDay() <= 9 ? `0${this.getDay()}` : this.getDay().toString())
            .replace(DateTimeFormatEnum.Day as string, this.getDay().toString())
            .replace(DateTimeFormatEnum.TwentyFourHour as string, this.getHours() <= 9 ? `0${this.getHours()}` : this.getHours().toString())
            .replace(DateTimeFormatEnum.TwoDigitsHour as string, this.getHours() <= 9 ? `0${this.getHours()}` : this.getHours() > 12 ? this.getHours().toString() : `${this.getHours() - 12 <= 9 ? '0' : ''}${this.getHours() - 12}`)
            .replace(DateTimeFormatEnum.Hour as string, this.getHours() <= 9 ? `0${this.getHours()}` : this.getHours() > 12 ? this.getHours().toString() : `${this.getHours() - 12}`)
            .replace(DateTimeFormatEnum.TwoDigitsMinute as string, this.getMinutes() <= 9 ? `0${this.getMinutes()}` : this.getMinutes().toString())
            .replace(DateTimeFormatEnum.Minute as string, this.getMinutes().toString())
            .replace(DateTimeFormatEnum.TwoDigitsSecond as string, this.getSeconds() <= 9 ? `0${this.getSeconds()}` : this.getSeconds().toString())
            .replace(DateTimeFormatEnum.Second as string, this.getSeconds().toString())
            .replace(DateTimeFormatEnum.NameDay as string, this.getDayName())
            .replace(DateTimeFormatEnum.NameMonth as string, this.getMonthName())
    }

}