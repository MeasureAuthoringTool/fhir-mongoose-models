const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const ConsentProvisionTypeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'ConsentProvisionType' },
  _type: { type: String, default: 'FHIR::ConsentProvisionType' },
});

class ConsentProvisionType extends mongoose.Document {
  constructor(object) {
    super(object, ConsentProvisionTypeSchema);
    this.typeName = 'ConsentProvisionType';
    this._type = 'FHIR::ConsentProvisionType';
  }
}

module.exports.ConsentProvisionTypeSchema = ConsentProvisionTypeSchema;
module.exports.ConsentProvisionType = ConsentProvisionType;
