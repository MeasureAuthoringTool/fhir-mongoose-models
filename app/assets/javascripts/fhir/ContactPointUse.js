const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const ContactPointUseSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'ContactPointUse' },
  _type: { type: String, default: 'FHIR::ContactPointUse' },
});

class ContactPointUse extends mongoose.Document {
  constructor(object) {
    super(object, ContactPointUseSchema);
    this.typeName = 'ContactPointUse';
    this._type = 'FHIR::ContactPointUse';
  }
}

module.exports.ContactPointUseSchema = ContactPointUseSchema;
module.exports.ContactPointUse = ContactPointUse;
