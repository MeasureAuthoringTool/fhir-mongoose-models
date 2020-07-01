const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { FHIRVersionSchema } = require('./FHIRVersion');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveCanonicalSchema } = require('./PrimitiveCanonical');
const { PrimitiveIdSchema } = require('./PrimitiveId');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { ReferenceSchema } = require('./Reference');

const ImplementationGuideDefinitionResourceSchema = BackboneElementSchemaFunction({
  reference: ReferenceSchema,
  fhirVersion: [FHIRVersionSchema],
  name: PrimitiveStringSchema,
  description: PrimitiveStringSchema,
  exampleBoolean: PrimitiveBooleanSchema,
  exampleCanonical: PrimitiveCanonicalSchema,
  groupingId: PrimitiveIdSchema,
  typeName: { type: String, default: 'ImplementationGuideDefinitionResource' },
  _type: { type: String, default: 'FHIR::ImplementationGuideDefinitionResource' },
});

class ImplementationGuideDefinitionResource extends mongoose.Document {
  constructor(object) {
    super(object, ImplementationGuideDefinitionResourceSchema);
    this.typeName = 'ImplementationGuideDefinitionResource';
    this._type = 'FHIR::ImplementationGuideDefinitionResource';
  }
}

module.exports.ImplementationGuideDefinitionResourceSchema = ImplementationGuideDefinitionResourceSchema;
module.exports.ImplementationGuideDefinitionResource = ImplementationGuideDefinitionResource;
