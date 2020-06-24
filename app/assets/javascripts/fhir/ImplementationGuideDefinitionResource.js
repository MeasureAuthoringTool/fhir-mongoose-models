const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { FHIRVersionSchema } = require('./FHIRVersion');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ImplementationGuideDefinitionResourceSchema = BackboneElementSchemaFunction({
   reference : ReferenceSchema,
   fhirVersion : [FHIRVersionSchema],
   name : String,
   description : String,
   exampleBoolean : Boolean,
   exampleCanonical : String,
   groupingId : String,
   fhirTitle: { type: String, default: 'ImplementationGuideDefinitionResource' },
});

class ImplementationGuideDefinitionResource extends mongoose.Document {
  constructor(object) {
    super(object, ImplementationGuideDefinitionResourceSchema);
    this._type = 'FHIR::ImplementationGuideDefinitionResource';
  }
};


module.exports.ImplementationGuideDefinitionResourceSchema = ImplementationGuideDefinitionResourceSchema;
module.exports.ImplementationGuideDefinitionResource = ImplementationGuideDefinitionResource;
