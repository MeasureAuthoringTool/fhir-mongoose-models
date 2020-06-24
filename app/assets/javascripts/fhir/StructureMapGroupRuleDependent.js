const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const StructureMapGroupRuleDependentSchema = BackboneElementSchemaFunction({
   name : String,
   variable : [String],
   fhirTitle: { type: String, default: 'StructureMapGroupRuleDependent' },
});

class StructureMapGroupRuleDependent extends mongoose.Document {
  constructor(object) {
    super(object, StructureMapGroupRuleDependentSchema);
    this._type = 'FHIR::StructureMapGroupRuleDependent';
  }
};


module.exports.StructureMapGroupRuleDependentSchema = StructureMapGroupRuleDependentSchema;
module.exports.StructureMapGroupRuleDependent = StructureMapGroupRuleDependent;
