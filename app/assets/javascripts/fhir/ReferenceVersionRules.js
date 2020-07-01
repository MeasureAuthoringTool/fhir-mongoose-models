const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const ReferenceVersionRulesSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'ReferenceVersionRules' },
  _type: { type: String, default: 'FHIR::ReferenceVersionRules' },
});

class ReferenceVersionRules extends mongoose.Document {
  constructor(object) {
    super(object, ReferenceVersionRulesSchema);
    this.typeName = 'ReferenceVersionRules';
    this._type = 'FHIR::ReferenceVersionRules';
  }
}

module.exports.ReferenceVersionRulesSchema = ReferenceVersionRulesSchema;
module.exports.ReferenceVersionRules = ReferenceVersionRules;
