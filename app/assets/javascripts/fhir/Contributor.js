const mongoose = require('mongoose/browser');
const { ContactDetailSchema } = require('./ContactDetail');
const { ContributorTypeSchema } = require('./ContributorType');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const ContributorSchema = ElementSchemaFunction({
  type: ContributorTypeSchema,
  name: PrimitiveStringSchema,
  contact: [ContactDetailSchema],
  typeName: { type: String, default: 'Contributor' },
  _type: { type: String, default: 'FHIR::Contributor' },
});

class Contributor extends mongoose.Document {
  constructor(object) {
    super(object, ContributorSchema);
    this.typeName = 'Contributor';
    this._type = 'FHIR::Contributor';
  }
}

module.exports.ContributorSchema = ContributorSchema;
module.exports.Contributor = Contributor;
