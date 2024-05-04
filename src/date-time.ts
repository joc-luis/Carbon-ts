import {TimeZoneEnum} from "./enum/time-zone-enum";
import {TimeSpan} from "./interfaces/time-span";
import {LocaleEnum} from "./enum/locale-enum";
import {DateTimeFormatEnum} from "./enum/date-time-format-enum";

export class DateTime {
    private dateTime: Date = new Date();
    private timeZone: TimeZoneEnum = TimeZoneEnum.UTC;
    private locale: LocaleEnum = LocaleEnum.enUS;

    private convertToTimezone(): Date {
        const sampleDateTime = new Date(new Date().toLocaleString(this.locale as string, {timeZone: this.timeZone as string}))
        const utcDateTime = new Date();
        const diff = sampleDateTime.getUTCHours() - utcDateTime.getUTCHours();

        const date = this.dateTime;
        date.setHours(date.getHours() + diff);

        return date;
    }

    /**
     * Create a new instance with the specified time zone and format
     * @param timeZone Time zone for the instance
     * @param locale Specifies the format to use for the date
     */
    constructor(timeZone: TimeZoneEnum = TimeZoneEnum.UTC, locale: LocaleEnum = LocaleEnum.enUS) {
        this.dateTime = new Date();
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
                             timeZone: TimeZoneEnum = TimeZoneEnum.UTC, locale: LocaleEnum = LocaleEnum.enUS) : DateTime {
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
    public static initializeFromDate(date: Date, timeZone: TimeZoneEnum = TimeZoneEnum.UTC, locale: LocaleEnum = LocaleEnum.enUS){
        const dateTime = new DateTime(timeZone, locale);
        dateTime.setFromDate(date);

        return dateTime;
    }


    /**
     * Change the time zone and format
     * @param timeZone Time zone for the instance
     * @param locale Specifies the format to use for the date
     */
    public changeTimeZone(timeZone: TimeZoneEnum, locale: LocaleEnum) {
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
    public setFromDate(date: Date){
        this.dateTime = date;
    }


    /**
     * Add a second to the current instance.
     */
    public addSecond(): void {
        this.dateTime.setSeconds(this.dateTime.getSeconds() + 1);
    }

    /**
     * Adds the specified seconds to the current instance
     * @param seconds Seconds to add
     */
    public addSeconds(seconds: number) {
        this.dateTime.setSeconds(this.dateTime.getSeconds() + seconds);
    }

    /**
     * Add a minute to the current instance.
     */
    public addMinute(): void {
        this.dateTime.setMinutes(this.dateTime.getMinutes() + 1);
    }

    /**
     * Adds the specified minutes to the current instance
     * @param minutes Minutes to add
     */
    public addMinutes(minutes: number) {
        this.dateTime.setMinutes(this.dateTime.getMinutes() + minutes);
    }

    /**
     * Add an hour to the current instance.
     */
    public addHour(): void {
        this.dateTime.setHours(this.dateTime.getHours() + 1);
    }

    /**
     * Adds the specified hours to the current instance
     * @param hours Minutes to add
     */
    public addHours(hours: number) {
        this.dateTime.setHours(this.dateTime.getHours() + hours);
    }

    /**
     * Add a day to the current instance.
     */
    public addDay(): void {
        this.dateTime.setDate(this.dateTime.getDate() + 1);
    }

    /**
     * Adds the specified days to the current instance
     * @param days Minutes to add
     */
    public addDays(days: number) {
        this.dateTime.setDate(this.dateTime.getDate() + days);
    }

    /**
     * Add a month to the current instance.
     */
    public addMonth(): void {
        this.dateTime.setMonth(this.dateTime.getMonth() + 1);
    }

    /**
     * Adds the specified months to the current instance
     * @param months Minutes to add
     */
    public addMonths(months: number) {
        this.dateTime.setMonth(this.dateTime.getMonth() + months);
    }

    /**
     * Add a year to the current instance.
     */
    public addYear(): void {
        this.dateTime.setMonth(this.dateTime.getMonth() + 12);
    }

    /**
     * Adds the specified months to the current instance
     * @param years Minutes to add
     */
    public addYears(years: number) {
        this.dateTime.setMonth(this.dateTime.getMonth() + (12 * years));
    }

    /**
     * Get the current timezone for the instance
     * @return Return the timezone
     */
    public getTimeZone(): TimeZoneEnum {
        return this.timeZone;
    }

    /**
     * Get the current second
     * @return Get the second
     */
    public getSecond(): number {
        return this.convertToTimezone().getSeconds();
    }

    /**
     * Get the current minute
     * @return Get the minute
     */
    public getMinute(): number {
        return this.convertToTimezone().getMinutes();
    }

    /**
     * Get the current hour
     * @return Get the hour
     */
    public getHour(): number {
        return this.convertToTimezone().getHours();
    }

    /**
     * Get the current day
     * @return Get the day
     */
    public getDay(): number {
        return this.convertToTimezone().getDate();
    }

    /**
     * Get the name of the current day
     * @return Name of the day
     */
    public getDayName(): string {
        switch (this.dateTime.toString().split(" ")[0]) {
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
        return this.convertToTimezone().getMonth() + 1;
    }


    /**
     * Get the name of the current
     * @return Name of the month
     */
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


    /**
     * Get the current year
     * @return Total year
     */
    public getYear(): number {
        return this.convertToTimezone().getFullYear();
    }

    /**
     * Get the total milliseconds of the UTC time
     * @return Total milliseconds
     */
    public getTotalMilliseconds(): number {
        return this.convertToTimezone().getTime();
    }

    /**
     * Get the total seconds of the UTC time
     * @return Total seconds
     */
    public getTotalSeconds(): number {
        return parseFloat(Number(this.convertToTimezone().getTime() / 1000).toFixed(2));
    }

    /**
     * Get the total minutes of the UTC time
     * @return Total minutes
     */
    public getTotalMinutes(): number {
        return parseFloat(Number(this.convertToTimezone().getTime() / (1000 * 60)).toFixed(2));
    }

    /**
     * Get the total hours of th UTC time
     * @return Total hours
     */
    public getTotalHours(): number {
        return parseFloat(Number(this.convertToTimezone().getTime() / (1000 * 3600)).toFixed(2));
    }

    /**
     * Get the total days of th UTC time
     * @return Total days
     */
    public getTotalDays(): number {
        return parseFloat(Number(this.convertToTimezone().getTime() / ((1000 * 3600) * 24)).toFixed(2));
    }

    /**
     * Get the total months of th UTC time
     * @return Total months
     */
    public getTotalMonths(): number {
        return this.convertToTimezone().getUTCMonth()
    }

    /**
     * Get the total years of th UTC time
     * @return Total years
     */
    public getTotalYears(): number {
        return this.convertToTimezone().getUTCFullYear()
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
        return Number((this.getTotalMilliseconds() - dateTime.getTotalMilliseconds()).toFixed(2));
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
        return Number((this.getTotalSeconds() - dateTime.getTotalSeconds()).toFixed(2));
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
        return Number((this.getTotalMinutes() - dateTime.getTotalMinutes()).toFixed(2));
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
        return Number((this.getTotalHours() - dateTime.getTotalHours()).toFixed(2));
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
        return Number((this.getTotalDays() - dateTime.getTotalDays()).toFixed(2));
    }

    /**
     * Get the difference in months of two dates
     * @param dateTime Date to compare
     * @param ignoreTimeZone Ignore time zone when comparing
     * @return Months of the difference.
     */
    public diffInMonths(dateTime: DateTime, ignoreTimeZone: boolean = false): number {
        if (!ignoreTimeZone && this.getTimeZone() != dateTime.getTimeZone()) {
            throw new Error("Time zones are not the same")
        }
        return Number((this.getTotalMonths() - dateTime.getTotalMonths()).toFixed(2));
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
        return this.convertToTimezone().toLocaleString()
    }

    /**
     * Get the time on 24 format
     *
     * @return Time of the current instance
     */
    public getTime(): string {

        const time = this.convertToTimezone().toLocaleTimeString().split(" ");
        const hour: number = parseInt(time[0].split(":")[0]);
        const minute: number = parseInt(time[0].split(":")[1]);
        const second: number = parseInt(time[0].split(":")[2]);

        if (time[1] == "AM") {
            return `${hour <= 9 ? '0' : ''}${hour}:${minute <= 9 ? '0' : ''}${minute}:${second <= 9 ? '0' : ''}${second}`
        }

        return `${hour + 12}:${minute <= 9 ? '0' : ''}${minute}:${second <= 9 ? '0' : ''}${second}`

    }

    /**
     * Get the date
     *
     * @return Date of the current instance
     */
    public getDate(): string {
        const date = this.convertToTimezone().toLocaleDateString().split("/");
        const day = parseInt(date[0]);
        const month = parseInt(date[1]);
        const year = date[2];

        return `${year}-${month <= 9 ? '0' : ''}${month}-${day <= 9 ? '0' : ''}${day}`

    }

    /**
     * Get the datetime on ISO format.
     *
     * @return Datetime of the current instance
     */
    public toISO() {
        return `${this.getYear()}-${this.getMonth() <= 9 ? '0' + this.getMonth() : this.getMonth()}-${this.getDay() <= 9 ? '0' + this.getDay() : this.getDay()}T${this.getTime()}.000Z`;
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
            .replace(DateTimeFormatEnum.TwentyFourHour as string, this.getHour() <= 9 ? `0${this.getHour()}` : this.getHour().toString())
            .replace(DateTimeFormatEnum.TwoDigitsHour as string, this.getHour() <= 9 ? `0${this.getHour()}` : this.getHour() > 12 ? this.getHour().toString() : `${this.getHour() - 12 <= 9 ? '0' : ''}${this.getHour() - 12}`)
            .replace(DateTimeFormatEnum.Hour as string, this.getHour() <= 9 ? `0${this.getHour()}` : this.getHour() > 12 ? this.getHour().toString() : `${this.getHour() - 12}`)
            .replace(DateTimeFormatEnum.TwoDigitsMinute as string, this.getMinute() <= 9 ? `0${this.getMinute()}` : this.getMinute().toString())
            .replace(DateTimeFormatEnum.Minute as string, this.getMinute().toString())
            .replace(DateTimeFormatEnum.TwoDigitsSecond as string, this.getSecond() <= 9 ? `0${this.getSecond()}` : this.getSecond().toString())
            .replace(DateTimeFormatEnum.Second as string, this.getSecond().toString())
            .replace(DateTimeFormatEnum.NameDay as string, this.getDayName())
            .replace(DateTimeFormatEnum.NameMonth as string, this.getMonthName())
    }


    /**
     * Create a new instance based on the current one but changing the time zone
     * @param timeZone Time zone for the new instance
     *
     * @return A new instance of DateTime
     */
    public toTimeZone(timeZone: TimeZoneEnum): DateTime {
        const sampleDateTime = new Date(new Date().toLocaleString(this.locale as string, {timeZone: timeZone as string}))
        const utcDateTime = new Date();
        const diff = sampleDateTime.getUTCHours() - utcDateTime.getUTCHours();

        const date = this.dateTime;
        date.setHours(date.getHours() + diff);

        return DateTime.initializeFromDate(date, timeZone, this.locale);
    }


}