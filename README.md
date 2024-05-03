# Carbon ts
A library to simplify handling dates and times in TypeScript.

## Usage

### Installation

````shell
npm i carbon-ts
````

### Create an instance

```ts
import {TimeZoneEnum, LocaleEnum, DateTime} from "carbon-ts";

// With default time zone and locale
var dateTime = DateTime.Now();


// With custom timezone and default locale
var dateTime = DateTime.now(TimeZoneEnum.enUS)

// With custom timezone and locale
var dateTime = DateTime.now(TimeZoneEnum.AmericaMonterrey, LocaleEnum.enUS);

// Add a day
dateTime.addDay();

// Difference in seconds.

const diff = dateTime.diffInSeconds(otherDateTime)

```
