const mongoose = require('mongoose/browser');
const { ContactPointSystemSchema } = require('./ContactPointSystem');
const { ContactPointUseSchema } = require('./ContactPointUse');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');
const { PeriodSchema } = require('./Period');
const { PrimitivePositiveIntSchema } = require('./PrimitivePositiveInt');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const ContactPointSchema = ElementSchemaFunction({
  system: ContactPointSystemSchema,
  value: PrimitiveStringSchema,
  use: ContactPointUseSchema,
  rank: PrimitivePositiveIntSchema,
  period: PeriodSchema,
  typeName: { type: String, default: 'ContactPoint' },
  _type: { type: String, default: 'FHIR::ContactPoint' },
});

class ContactPoint extends mongoose.Document {
  constructor(object) {
    super(object, ContactPointSchema);
    this.typeName = 'ContactPoint';
    this._type = 'FHIR::ContactPoint';
  }
}

module.exports.ContactPointSchema = ContactPointSchema;
module.exports.ContactPoint = ContactPoint;
