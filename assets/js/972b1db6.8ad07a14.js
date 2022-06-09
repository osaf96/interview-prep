"use strict";(self.webpackChunkinterview_prep=self.webpackChunkinterview_prep||[]).push([[7573],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return c}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=m(a),c=o,f=u["".concat(s,".").concat(c)]||u[c]||p[c]||r;return a?n.createElement(f,i(i({ref:t},d),{},{components:a})):n.createElement(f,i({ref:t},d))}));function c(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var m=2;m<r;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9283:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return p}});var n=a(7462),o=a(3366),r=(a(7294),a(3905)),i=["components"],l={title:"Date and Time API (Java)",description:"An overview of the Java Date and Time API",last_modified:new Date("2020-05-30T13:54:15.000Z"),sidebar_label:"Date and Time API"},s=void 0,m={unversionedId:"java/date-time-api",id:"java/date-time-api",title:"Date and Time API (Java)",description:"An overview of the Java Date and Time API",source:"@site/docs/java/date-time-api.md",sourceDirName:"java",slug:"/java/date-time-api",permalink:"/interview-prep/about/java/date-time-api",draft:!1,tags:[],version:"current",frontMatter:{title:"Date and Time API (Java)",description:"An overview of the Java Date and Time API",last_modified:"2020-05-30T13:54:15.000Z",sidebar_label:"Date and Time API"},sidebar:"docs",previous:{title:"Concurrency",permalink:"/interview-prep/about/java/concurrency"},next:{title:"Equals",permalink:"/interview-prep/about/java/equals"}},d={},p=[{value:"Date and Time API basics",id:"date-and-time-api-basics",level:2},{value:"Instants and Durations",id:"instants-and-durations",level:2},{value:"Local dates and time",id:"local-dates-and-time",level:2},{value:"Local dates",id:"local-dates",level:3},{value:"Temporal adjusters",id:"temporal-adjusters",level:3},{value:"Local time",id:"local-time",level:3},{value:"Zoned time",id:"zoned-time",level:2},{value:"Formatting and parsing dates",id:"formatting-and-parsing-dates",level:2},{value:"Resources",id:"resources",level:2}],u={toc:p};function c(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"An overview of the Java Date and Time API"),(0,r.kt)("h2",{id:"date-and-time-api-basics"},"Date and Time API basics"),(0,r.kt)("p",null,"Java 1.0 had ",(0,r.kt)("inlineCode",{parentName:"p"},"Date"),", most methods deprecated with introduction of ",(0,r.kt)("inlineCode",{parentName:"p"},"Calendar")," in Java 1.1. Still not perfect (sometimes awkward API, didn't deal with leap seconds, ...) -> the recommendation used to be to use a library like Joda Time instead."),(0,r.kt)("p",null,"Java 8 introduced a new Data and Time API under ",(0,r.kt)("inlineCode",{parentName:"p"},"java.time"),", which solves a lot of the issues with the older solutions."),(0,r.kt)("p",null,"Some key points:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"All instances of ",(0,r.kt)("inlineCode",{parentName:"li"},"java.time")," objects are immutable (operations that change dates or times return new objects)"),(0,r.kt)("li",{parentName:"ul"},"A day has exactly 86400 seconds (leap seconds are dealt with by making seconds last a little bit longer)")),(0,r.kt)("h2",{id:"instants-and-durations"},"Instants and Durations"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"Instant"),": represents a point on the time line"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Duration"),": represents the amount of time between two instants"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Instant start = Instant.now();\n// perform some computations\nInstant end = Instant.now();\nDuration timeElapsed = Duration.between(start, end);\nlong millis = timeElapsed.toMillis();\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Duration oneWeek = Duration.ofDays(7);\nlong secondsInWeek = oneWeek.toSeconds();\n")),(0,r.kt)("p",null,"Computations with durations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Option 1: use methods directly on durations "),(0,r.kt)("li",{parentName:"ul"},"Option 2: convert to nanoseconds",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Note that a long of nanoseconds doesn't allow you to use the entire range of a ",(0,r.kt)("inlineCode",{parentName:"li"},"Duration"),", but it a long can hold almost 300 years worth of nanoseconds")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Option 1\nif (duration1.multipliedBy(10).minus(duration2).isNegative()) {\n    // ...\n}\n\n// Option 2\nif (duration1.toNanos() * 10 < duration2.toNanos()) {\n    // ...\n}\n")),(0,r.kt)("h2",{id:"local-dates-and-time"},"Local dates and time"),(0,r.kt)("p",null,"Local date/time: has a date and/or time of day, but no time zone information"),(0,r.kt)("p",null,"Example use cases: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Someone's birthday (this refers to a certain calendar date, but not to a precise instant on the time line)"),(0,r.kt)("li",{parentName:"ul"},"Calculations with date and time when you want to ignore time zones and don't want daylight savings time to be taken into account",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Example: a meeting that is at 10:00 every 7 days (regardless of daylight savings time)"),(0,r.kt)("li",{parentName:"ul"},"Note: you can also ignore daylight savings time when working with zoned times, see below")))),(0,r.kt)("h3",{id:"local-dates"},"Local dates"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"LocalDate today = LocalDate.now();\nLocalDate test1 = LocalDate.of(2019, 8, 28);\nLocalDate test2 = LocalDate.of(2019, Month.AUGUST, 28);\nSystem.out.println(test1.equals(test2)); // true\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"LocalDate programmersDay = LocalDate.of(2019, 1, 1).plusDays(255);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Duration.ofYears(1) wouldn't produce the correct result in a leap year\nLocalDate birthdayNextYear = birthday.plus(Period.ofYears(1));\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"today.until(christmas, ChronoUnit.DAYS) // get # days until Christmas\n")),(0,r.kt)("p",null,"Note: methods adjusting dates don't throw exceptions if the result would be invalid but adjust it to a valid date instead!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"LocalDate test = LocalDate.of(2016, 1, 31).plusMonths(1);\nSystem.out.println(test); // 2016-02-29\n")),(0,r.kt)("h3",{id:"temporal-adjusters"},"Temporal adjusters"),(0,r.kt)("p",null,"Example: compute first Tuesday of a month"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"LocalDate firstTuesday = LocalDate.of(year, month, 1).with(\nTemporalAdjusters.nextOrSame(DayOfWeek.TUESDAY))\n")),(0,r.kt)("h3",{id:"local-time"},"Local time"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"LocalTime currentTime = LocalTime.now();\nLocalTime bedTime = LocalTime.of(00, 30);\nLocalTime alarmTime = bedTime.plusHours(8);\n")),(0,r.kt)("h2",{id:"zoned-time"},"Zoned time"),(0,r.kt)("p",null,"Zoned time: date and time plus time zone information"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Represents particular instant in time"),(0,r.kt)("li",{parentName:"ul"},"When performing calculations or transforming between time zones, daylight savings time and time zone rules are taken into account")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'ZonedDateTime apolloLaunch = ZonedDateTime.of(1969, 7, 16, 9, 32, 0, 0,   \n    ZoneId.of("America/New_York"));\n    \nSystem.out.println(apolloLaunch); // 1969-07-16T09:32-04:00[America/New_York]\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Instant now = Instant.now();\nZonedDateTime nowInUtc = now.atZone(ZoneId.of("UTC"));\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Duration.ofDays(7) wouldn't work with daylight savings time\nZonedDateTime nextMeeting = currentMeeting.plus(Period.ofDays(7))\n")),(0,r.kt)("p",null,"Note: there is also ",(0,r.kt)("inlineCode",{parentName:"p"},"OffsetDateTime"),", which uses a fixed offset from UTC. This is useful for some technical applications like network protocols. For dealing with human time, ",(0,r.kt)("inlineCode",{parentName:"p"},"ZonedDateTime")," is typically the best option."),(0,r.kt)("h2",{id:"formatting-and-parsing-dates"},"Formatting and parsing dates"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"DateTimeFormatter")," class now replaces the old ",(0,r.kt)("inlineCode",{parentName:"p"},"DateTimeFormat")," (you can still call ",(0,r.kt)("inlineCode",{parentName:"p"},"toFormat()")," on a ",(0,r.kt)("inlineCode",{parentName:"p"},"DateTimeFormatter")," to get a legacy ",(0,r.kt)("inlineCode",{parentName:"p"},"DateTimeFormat"),")"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// predefined ISO_OFFSET_DATE_TIME format (ISO-8601-compliant)\nString formatted = DateTimeFormatter.ISO_OFFSET_DATE_TIME.format(ZonedDateTime.now());\nSystem.out.println(formatted); // 2019-08-28T16:02:07.5384469+02:00\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"DateTimeFormatter formatter = DateTimeFormatter.ofLocalizedDateTime(FormatStyle.LONG);\nString formatted = formatter.format(ZonedDateTime.now());\nSystem.out.println(formatted); // August 28, 2019 at 4:05:04 PM CEST\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'LocalDate parsed1 = LocalDate.parse("2019-08-28");\nDateTimeFormatter patternFormatter = DateTimeFormatter.ofPattern("yyyy/dd/MM");\nLocalDate parsed2 = LocalDate.parse("2019/28/08", patternFormatter);\nSystem.out.println(parsed1.equals(parsed2)); // true\n\n// throws DateTimeParseException\nLocalDate parsed3 = LocalDate.parse("2019/08/28", patternFormatter);\n')),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Core Java SE 9 for the Impatient (book by Cay S. Horstmann)")))}c.isMDXComponent=!0}}]);