const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const SlicingRulesSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'SlicingRules' },
  _type: { type: String, default: 'FHIR::SlicingRules' },
});

class SlicingRules extends mongoose.Document {
  constructor(object) {
    super(object, SlicingRulesSchema);
    this.typeName = 'SlicingRules';
    this._type = 'FHIR::SlicingRules';
  }
}

module.exports.SlicingRulesSchema = SlicingRulesSchema;
module.exports.SlicingRules = SlicingRules;
