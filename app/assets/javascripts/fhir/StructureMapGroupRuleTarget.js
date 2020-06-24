const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { StructureMapContextTypeSchema } = require('./StructureMapContextType');
const { StructureMapGroupRuleTargetParameterSchema } = require('./StructureMapGroupRuleTargetParameter');
const { StructureMapTargetListModeSchema } = require('./StructureMapTargetListMode');
const { StructureMapTransformSchema } = require('./StructureMapTransform');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const StructureMapGroupRuleTargetSchema = BackboneElementSchemaFunction({
   context : String,
   contextType : StructureMapContextTypeSchema,
   element : String,
   variable : String,
   listMode : [StructureMapTargetListModeSchema],
   listRuleId : String,
   transform : StructureMapTransformSchema,
   parameter : [StructureMapGroupRuleTargetParameterSchema],
   fhirTitle: { type: String, default: 'StructureMapGroupRuleTarget' },
});

class StructureMapGroupRuleTarget extends mongoose.Document {
  constructor(object) {
    super(object, StructureMapGroupRuleTargetSchema);
    this._type = 'FHIR::StructureMapGroupRuleTarget';
  }
};


module.exports.StructureMapGroupRuleTargetSchema = StructureMapGroupRuleTargetSchema;
module.exports.StructureMapGroupRuleTarget = StructureMapGroupRuleTarget;
