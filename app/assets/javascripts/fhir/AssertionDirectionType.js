const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const AssertionDirectionTypeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'AssertionDirectionType' },
  _type: { type: String, default: 'FHIR::AssertionDirectionType' },
});

class AssertionDirectionType extends mongoose.Document {
  constructor(object) {
    super(object, AssertionDirectionTypeSchema);
    this.typeName = 'AssertionDirectionType';
    this._type = 'FHIR::AssertionDirectionType';
  }
}

module.exports.AssertionDirectionTypeSchema = AssertionDirectionTypeSchema;
module.exports.AssertionDirectionType = AssertionDirectionType;
