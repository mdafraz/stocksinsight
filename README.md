#  API Documentation

## Deployed Instance:

```
https://stocksinsight.vercel.app/
```

## Endpoints

### 1. Retrieve Announcements by CompanyID

This endpoint allows users to find announcements of a specific company or multiple companies.

**Endpoint:**
```
https://stocksinsight.vercel.app/api/announcement
```

**Parameters:**

- `SCRIP_CD` (optional): The company ID to filter announcements. Use a single value for a specific company or mutiple for multiple companies.

**Example:**

- Retrieve announcements for a single company:
  ```
  GET /api/announcement?SCRIP_CD=COMPANY_ID
  ```
- Retrieve announcements for multiple companies:
  ```
  GET /api/announcement?SCRIP_CD=COMPANY_ID_1,COMPANY_ID_2
  ```
  
### 2. Retrieve Announcements by Period

This endpoint allows users to find announcements over a specified period (start and end dates) or announcements of a company/group of companies over a period.

**Endpoint:**
```
GET /api/announcement?from=START_DATE&to=END_DATE
```

**Parameters:**

- `from` (required): The start date of the period to filter announcements . 
- `to` (required): The end date of the period to filter announcements . 
- `SCRIP_CD` (optional): The company ID to filter announcements. Use a single value for a specific company or mutiple for multiple companies.
- `critAnnouncement` (optional): Set to `true` to filter critical announcements.

**Example:**

- Retrieve announcements over a specified period:
  ```
  GET /api/announcement?start=2023-07-01&end=2023-07-31
  ```


### 3. Retrieve Critical Announcements

This endpoint allows users to find all the critical announcements.

**Endpoint:**
```
GET /api/announcement?critAnnouncement=true
```

**Parameters:**

- `critAnnouncement`: Set to `true` to filter critical announcements.
- `SCRIP_CD` (optional): The company ID to filter announcements. Use a single value for a specific company or mutiple for multiple companies.
- `from` (optional): The start date of the period to filter announcements . 
- `to` (optional): The end date of the period to filter announcements . 


### 4. Retrieve Announcements from the Past 1-2 Days

This endpoint allows users to retrieve announcements from the past 1-2 days in descending time order.

**Endpoint:**
```
GET api/recentAnnouncements/announcements?d=2
```

**Parameters:**

- `d` (required): The number of days to retrieve announcements from (1 or 2).

**Example:**

- Retrieve announcements from the past 1 day:
  ```
  GET api/recentAnnouncements/announcements?d=1
  ```







  








