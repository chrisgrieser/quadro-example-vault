```dataview
TABLE
	type-of-compatibility,
	cause-of-the-issue,
	solutions,
	OS,
	extraction-source
FROM "Extractions/compatibility challenges"
WHERE file.name != "Template"
SORT extraction-date ASC
```
