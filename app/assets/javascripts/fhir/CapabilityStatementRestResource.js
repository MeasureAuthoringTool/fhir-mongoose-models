const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CapabilityStatementRestResourceInteractionSchema } = require('./CapabilityStatementRestResourceInteraction');
const { CapabilityStatementRestResourceOperationSchema } = require('./CapabilityStatementRestResourceOperation');
const { CapabilityStatementRestResourceSearchParamSchema } = require('./CapabilityStatementRestResourceSearchParam');
const { ConditionalDeleteStatusSchema } = require('./ConditionalDeleteStatus');
const { ConditionalReadStatusSchema } = require('./ConditionalReadStatus');
const { ReferenceHandlingPolicySchema } = require('./ReferenceHandlingPolicy');
const { ResourceTypeSchema } = require('./ResourceType');
const { ResourceVersionPolicySchema } = require('./ResourceVersionPolicy');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const CapabilityStatementRestResourceSchema = BackboneElementSchemaFunction({
   type : ResourceTypeSchema,
   profile : String,
   supportedProfile : [String],
   documentation : String,
   interaction : [CapabilityStatementRestResourceInteractionSchema],
   versioning : ResourceVersionPolicySchema,
   readHistory : Boolean,
   updateCreate : Boolean,
   conditionalCreate : Boolean,
   conditionalRead : ConditionalReadStatusSchema,
   conditionalUpdate : Boolean,
   conditionalDelete : ConditionalDeleteStatusSchema,
   referencePolicy : [ReferenceHandlingPolicySchema],
   searchInclude : [String],
   searchRevInclude : [String],
   searchParam : [CapabilityStatementRestResourceSearchParamSchema],
   operation : [CapabilityStatementRestResourceOperationSchema],
   fhirTitle: { type: String, default: 'CapabilityStatementRestResource' },
});

class CapabilityStatementRestResource extends mongoose.Document {
  constructor(object) {
    super(object, CapabilityStatementRestResourceSchema);
    this._type = 'FHIR::CapabilityStatementRestResource';
  }
};


module.exports.CapabilityStatementRestResourceSchema = CapabilityStatementRestResourceSchema;
module.exports.CapabilityStatementRestResource = CapabilityStatementRestResource;
