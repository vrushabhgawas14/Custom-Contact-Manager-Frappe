# Customer Contact Manager- Frappe Project

### This Project is about making a Customer Contact Manager Application using Frappe Framework.

## Features Implemented

1. **DocType: Customer Contacts**

   - Full Name (Data, Required)
   - Phone Number (Phone, Required, Validated)
   - Email (Data)
   - Company (Data, Auto-Capitalized)
   - Notes (Text)
   - Status (Select: Active/Inactive)

2. **Customizations:**

   - **List View:** Customized with key fields and status indicators.
   - **Form View:** Status toggle button.
   - **Server-Side Validation:** Validation of phone numbers.
   - **Client-Side Validation:** Auto-Capitalized company name.

3. **Custom Button:**

   - Custom Button Toggles the `status` field between "Active" and "Inactive".

## Setup instructions

#### Note: Frappe should be installed on your system.

### Steps

1. Commands to clone this repo:

   ```bash
    bench init frappe-bench
    cd frappe-bench
    cd apps
    git clone https://github.com/yourusername/Custom-Contact-Manager-Frappe.git
    cd ..
   ```

2. Create new site and install app in it

   ```bash
   bench new-site test.com
   bench --site test.com install-app customer_app
   ```

3. Migrate the site:

   ```bash
   bench --site test.com migrate
   ```

4. Start the server:

   ```bash
   bench start
   ```

### Output

- Open your browser and navigate to http://127.0.0.1:8000.
- Create, edit, and validate information
- Test the status toggle button
- Check Auto Captalization of Company and Validation of Phone number.

## Challenges Faced

- Setup:

  Setup was the big challenge for me as it took three days to setup as I was follwing multiple refernce like youtube, documentation, blogs, etc.
  But later I solved by going to installation setup again and installing mariadb from website.

- Custom Script Linking:

  This was the challenge I faced of linking JavaScript custom scripts to the Customer Contact DocType.
  Then I Learned the correct file structure for Frappe apps and ensured the script was placed in the appropriate directory and correctly referencing it in the DocType.

#### References

- Build With Hussian - YouTube
- D-codE - YouTube
- Frappe Documentation

## Assumptions

- The user has a working Frappe setup.

## Future Improvements

- Add more validation for fields like email.
- Improve UI for better user experience.
