const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CapabilityStatementRestInteractionSchema } = require('./CapabilityStatementRestInteraction');
const { CapabilityStatementRestResourceOperationSchema } = require('./CapabilityStatementRestResourceOperation');
const { CapabilityStatementRestResourceSchema } = require('./CapabilityStatementRestResource');
const { CapabilityStatementRestResourceSearchParamSchema } = require('./CapabilityStatementRestResourceSearchParam');
const { CapabilityStatementRestSecuritySchema } = require('./CapabilityStatementRestSecurity');
const { RestfulCapabilityModeSchema } = require('./RestfulCapabilityMode');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const CapabilityStatementRestSchema = BackboneElementSchemaFunction({
   mode : RestfulCapabilityModeSchema,
   documentation : String,
   security : CapabilityStatementRestSecuritySchema,
   resource : [CapabilityStatementRestResourceSchema],
   interaction : [CapabilityStatementRestInteractionSchema],
   searchParam : [CapabilityStatementRestResourceSearchParamSchema],
   operation : [CapabilityStatementRestResourceOperationSchema],
   compartment : [String],
   fhirTitle: { type: String, default: 'CapabilityStatementRest' },
});

class CapabilityStatementRest extends mongoose.Document {
  constructor(object) {
    super(object, CapabilityStatementRestSchema);
    this._type = 'FHIR::CapabilityStatementRest';
  }
};


module.exports.CapabilityStatementRestSchema = CapabilityStatementRestSchema;
module.exports.CapabilityStatementRest = CapabilityStatementRest;
