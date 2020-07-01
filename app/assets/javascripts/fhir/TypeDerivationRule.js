const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const TypeDerivationRuleSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'TypeDerivationRule' },
  _type: { type: String, default: 'FHIR::TypeDerivationRule' },
});

class TypeDerivationRule extends mongoose.Document {
  constructor(object) {
    super(object, TypeDerivationRuleSchema);
    this.typeName = 'TypeDerivationRule';
    this._type = 'FHIR::TypeDerivationRule';
  }
}

module.exports.TypeDerivationRuleSchema = TypeDerivationRuleSchema;
module.exports.TypeDerivationRule = TypeDerivationRule;
