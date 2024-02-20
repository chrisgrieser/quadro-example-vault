```dataview
TABLE
	type-of-problem,
	cause-of-the-issue,
	solutions,
	extraction-source
FROM "Extractions/app store problem"
WHERE file.name != "Template"
SORT extraction-date ASC
```
