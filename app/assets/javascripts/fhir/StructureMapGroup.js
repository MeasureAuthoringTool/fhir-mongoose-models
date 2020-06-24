const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { StructureMapGroupInputSchema } = require('./StructureMapGroupInput');
const { StructureMapGroupRuleSchema } = require('./StructureMapGroupRule');
const { StructureMapGroupTypeModeSchema } = require('./StructureMapGroupTypeMode');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const StructureMapGroupSchema = BackboneElementSchemaFunction({
   name : String,
   extends : String,
   typeMode : StructureMapGroupTypeModeSchema,
   documentation : String,
   input : [StructureMapGroupInputSchema],
   rule : [StructureMapGroupRuleSchema],
   fhirTitle: { type: String, default: 'StructureMapGroup' },
});

class StructureMapGroup extends mongoose.Document {
  constructor(object) {
    super(object, StructureMapGroupSchema);
    this._type = 'FHIR::StructureMapGroup';
  }
};


module.exports.StructureMapGroupSchema = StructureMapGroupSchema;
module.exports.StructureMapGroup = StructureMapGroup;
