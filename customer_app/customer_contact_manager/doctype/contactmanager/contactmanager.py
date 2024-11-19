# Copyright (c) 2024, vrushabh and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class ContactManager(Document):
    def validate(self):
        if not (self.phone_number[4:].isdigit() and len(self.phone_number[4:]) == 10):
            frappe.throw(self.phone_number + " This Phone number must contain 10 digits and should be numbers only.")