const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const ContributorTypeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'ContributorType' },
  _type: { type: String, default: 'FHIR::ContributorType' },
});

class ContributorType extends mongoose.Document {
  constructor(object) {
    super(object, ContributorTypeSchema);
    this.typeName = 'ContributorType';
    this._type = 'FHIR::ContributorType';
  }
}

module.exports.ContributorTypeSchema = ContributorTypeSchema;
module.exports.ContributorType = ContributorType;
