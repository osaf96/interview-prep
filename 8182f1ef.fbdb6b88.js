(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{188:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a(1),o=a(9),r=(a(0),a(231)),i={title:"Date and Time API (Java)",description:"An overview of the Java Date and Time API",last_modified:new Date("2020-05-30T13:54:15.000Z"),sidebar_label:"Date and Time API"},l={id:"java/date-time-api",title:"Date and Time API (Java)",description:"An overview of the Java Date and Time API",source:"@site/docs\\java\\date-time-api.md",permalink:"/java/date-time-api",sidebar_label:"Date and Time API",sidebar:"docs",previous:{title:"Concurrency (Java)",permalink:"/java/concurrency"},next:{title:"Equals (Java)",permalink:"/java/equals"}},c=[{value:"Date and Time API basics",id:"date-and-time-api-basics",children:[]},{value:"Instants and Durations",id:"instants-and-durations",children:[]},{value:"Local dates and time",id:"local-dates-and-time",children:[{value:"Local dates",id:"local-dates",children:[]},{value:"Temporal adjusters",id:"temporal-adjusters",children:[]},{value:"Local time",id:"local-time",children:[]}]},{value:"Zoned time",id:"zoned-time",children:[]},{value:"Formatting and parsing dates",id:"formatting-and-parsing-dates",children:[]},{value:"Resources",id:"resources",children:[]}],s={rightToc:c};function d(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"An overview of the Java Date and Time API"),Object(r.b)("h2",{id:"date-and-time-api-basics"},"Date and Time API basics"),Object(r.b)("p",null,"Java 1.0 had ",Object(r.b)("inlineCode",{parentName:"p"},"Date"),", most methods deprecated with introduction of ",Object(r.b)("inlineCode",{parentName:"p"},"Calendar")," in Java 1.1. Still not perfect (sometimes awkward API, didn't deal with leap seconds, ...) -> the recommendation used to be to use a library like Joda Time instead."),Object(r.b)("p",null,"Java 8 introduced a new Data and Time API under ",Object(r.b)("inlineCode",{parentName:"p"},"java.time"),", which solves a lot of the issues with the older solutions."),Object(r.b)("p",null,"Some key points:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"All instances of ",Object(r.b)("inlineCode",{parentName:"li"},"java.time")," objects are immutable (operations that change dates or times return new objects)"),Object(r.b)("li",{parentName:"ul"},"A day has exactly 86400 seconds (leap seconds are dealt with by making seconds last a little bit longer)")),Object(r.b)("h2",{id:"instants-and-durations"},"Instants and Durations"),Object(r.b)("p",null," ",Object(r.b)("inlineCode",{parentName:"p"},"Instant"),": represents a point on the time line"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Duration"),": represents the amount of time between two instants"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"Instant start = Instant.now();\n// perform some computations\nInstant end = Instant.now();\nDuration timeElapsed = Duration.between(start, end);\nlong millis = timeElapsed.toMillis();\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"Duration oneWeek = Duration.ofDays(7);\nlong secondsInWeek = oneWeek.toSeconds();\n")),Object(r.b)("p",null,"Computations with durations:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Option 1: use methods directly on durations "),Object(r.b)("li",{parentName:"ul"},"Option 2: convert to nanoseconds",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Note that a long of nanoseconds doesn't allow you to use the entire range of a ",Object(r.b)("inlineCode",{parentName:"li"},"Duration"),", but it a long can hold almost 300 years worth of nanoseconds")))),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"// Option 1\nif (duration1.multipliedBy(10).minus(duration2).isNegative()) {\n    // ...\n}\n\n// Option 2\nif (duration1.toNanos() * 10 < duration2.toNanos()) {\n    // ...\n}\n")),Object(r.b)("h2",{id:"local-dates-and-time"},"Local dates and time"),Object(r.b)("p",null,"Local date/time: has a date and/or time of day, but no time zone information"),Object(r.b)("p",null,"Example use cases: "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Someone's birthday (this refers to a certain calendar date, but not to a precise instant on the time line)"),Object(r.b)("li",{parentName:"ul"},"Calculations with date and time when you want to ignore time zones and don't want daylight savings time to be taken into account",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Example: a meeting that is at 10:00 every 7 days (regardless of daylight savings time)"),Object(r.b)("li",{parentName:"ul"},"Note: you can also ignore daylight savings time when working with zoned times, see below")))),Object(r.b)("h3",{id:"local-dates"},"Local dates"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"LocalDate today = LocalDate.now();\nLocalDate test1 = LocalDate.of(2019, 8, 28);\nLocalDate test2 = LocalDate.of(2019, Month.AUGUST, 28);\nSystem.out.println(test1.equals(test2)); // true\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"LocalDate programmersDay = LocalDate.of(2019, 1, 1).plusDays(255);\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"// Duration.ofYears(1) wouldn't produce the correct result in a leap year\nLocalDate birthdayNextYear = birthday.plus(Period.ofYears(1));\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"today.until(christmas, ChronoUnit.DAYS) // get # days until Christmas\n")),Object(r.b)("p",null,"Note: methods adjusting dates don't throw exceptions if the result would be invalid but adjust it to a valid date instead!"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"LocalDate test = LocalDate.of(2016, 1, 31).plusMonths(1);\nSystem.out.println(test); // 2016-02-29\n")),Object(r.b)("h3",{id:"temporal-adjusters"},"Temporal adjusters"),Object(r.b)("p",null,"Example: compute first Tuesday of a month"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"LocalDate firstTuesday = LocalDate.of(year, month, 1).with(\nTemporalAdjusters.nextOrSame(DayOfWeek.TUESDAY))\n")),Object(r.b)("h3",{id:"local-time"},"Local time"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"LocalTime currentTime = LocalTime.now();\nLocalTime bedTime = LocalTime.of(00, 30);\nLocalTime alarmTime = bedTime.plusHours(8);\n")),Object(r.b)("h2",{id:"zoned-time"},"Zoned time"),Object(r.b)("p",null,"Zoned time: date and time plus time zone information"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Represents particular instant in time"),Object(r.b)("li",{parentName:"ul"},"When performing calculations or transforming between time zones, daylight savings time and time zone rules are taken into account")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'ZonedDateTime apolloLaunch = ZonedDateTime.of(1969, 7, 16, 9, 32, 0, 0,   \n    ZoneId.of("America/New_York"));\n    \nSystem.out.println(apolloLaunch); // 1969-07-16T09:32-04:00[America/New_York]\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'Instant now = Instant.now();\nZonedDateTime nowInUtc = now.atZone(ZoneId.of("UTC"));\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"// Duration.ofDays(7) wouldn't work with daylight savings time\nZonedDateTime nextMeeting = currentMeeting.plus(Period.ofDays(7))\n")),Object(r.b)("p",null,"Note: there is also ",Object(r.b)("inlineCode",{parentName:"p"},"OffsetDateTime"),", which uses a fixed offset from UTC. This is useful for some technical applications like network protocols. For dealing with human time, ",Object(r.b)("inlineCode",{parentName:"p"},"ZonedDateTime")," is typically the best option."),Object(r.b)("h2",{id:"formatting-and-parsing-dates"},"Formatting and parsing dates"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"DateTimeFormatter")," class now replaces the old ",Object(r.b)("inlineCode",{parentName:"p"},"DateTimeFormat")," (you can still call ",Object(r.b)("inlineCode",{parentName:"p"},"toFormat()")," on a ",Object(r.b)("inlineCode",{parentName:"p"},"DateTimeFormatter")," to get a legacy ",Object(r.b)("inlineCode",{parentName:"p"},"DateTimeFormat"),")"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"// predefined ISO_OFFSET_DATE_TIME format (ISO-8601-compliant)\nString formatted = DateTimeFormatter.ISO_OFFSET_DATE_TIME.format(ZonedDateTime.now());\nSystem.out.println(formatted); // 2019-08-28T16:02:07.5384469+02:00\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"DateTimeFormatter formatter = DateTimeFormatter.ofLocalizedDateTime(FormatStyle.LONG);\nString formatted = formatter.format(ZonedDateTime.now());\nSystem.out.println(formatted); // August 28, 2019 at 4:05:04 PM CEST\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'LocalDate parsed1 = LocalDate.parse("2019-08-28");\nDateTimeFormatter patternFormatter = DateTimeFormatter.ofPattern("yyyy/dd/MM");\nLocalDate parsed2 = LocalDate.parse("2019/28/08", patternFormatter);\nSystem.out.println(parsed1.equals(parsed2)); // true\n\n// throws DateTimeParseException\nLocalDate parsed3 = LocalDate.parse("2019/08/28", patternFormatter);\n')),Object(r.b)("h2",{id:"resources"},"Resources"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Core Java SE 9 for the Impatient (book by Cay S. Horstmann)")))}d.isMDXComponent=!0},231:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return u}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=o.a.createContext({}),d=function(e){var t=o.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},m=function(e){var t=d(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=d(a),p=n,u=m["".concat(i,".").concat(p)]||m[p]||b[p]||r;return a?o.a.createElement(u,l({ref:t},s,{components:a})):o.a.createElement(u,l({ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<r;s++)i[s]=a[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);