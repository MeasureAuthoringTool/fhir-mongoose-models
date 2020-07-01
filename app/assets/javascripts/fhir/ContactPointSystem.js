const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const ContactPointSystemSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'ContactPointSystem' },
  _type: { type: String, default: 'FHIR::ContactPointSystem' },
});

class ContactPointSystem extends mongoose.Document {
  constructor(object) {
    super(object, ContactPointSystemSchema);
    this.typeName = 'ContactPointSystem';
    this._type = 'FHIR::ContactPointSystem';
  }
}

module.exports.ContactPointSystemSchema = ContactPointSystemSchema;
module.exports.ContactPointSystem = ContactPointSystem;
