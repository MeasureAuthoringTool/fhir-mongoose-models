const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const StrandTypeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'StrandType' },
  _type: { type: String, default: 'FHIR::StrandType' },
});

class StrandType extends mongoose.Document {
  constructor(object) {
    super(object, StrandTypeSchema);
    this.typeName = 'StrandType';
    this._type = 'FHIR::StrandType';
  }
}

module.exports.StrandTypeSchema = StrandTypeSchema;
module.exports.StrandType = StrandType;
