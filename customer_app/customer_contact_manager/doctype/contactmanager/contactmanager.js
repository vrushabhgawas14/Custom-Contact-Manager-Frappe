// Copyright (c) 2024, vrushabh and contributors
// For license information, please see license.txt

frappe.ui.form.on('ContactManager', {
	refresh(frm) {
		frm.add_custom_button(frm.doc.status === 'Active' ? 'Mark it Inactive' : 'Mark it Active', function () {
            frm.set_value('status', frm.doc.status === 'Active' ? 'Inactive' : 'Active');
            frm.save();
        });
		
		if (frm.doc.company) {
            frm.set_value('company', frm.doc.company.toUpperCase());
        }
	}
})