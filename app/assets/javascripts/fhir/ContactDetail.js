const mongoose = require('mongoose/browser');
const { ContactPointSchema } = require('./ContactPoint');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const ContactDetailSchema = ElementSchemaFunction({
  name: PrimitiveStringSchema,
  telecom: [ContactPointSchema],
  typeName: { type: String, default: 'ContactDetail' },
  _type: { type: String, default: 'FHIR::ContactDetail' },
});

class ContactDetail extends mongoose.Document {
  constructor(object) {
    super(object, ContactDetailSchema);
    this.typeName = 'ContactDetail';
    this._type = 'FHIR::ContactDetail';
  }
}

module.exports.ContactDetailSchema = ContactDetailSchema;
module.exports.ContactDetail = ContactDetail;
