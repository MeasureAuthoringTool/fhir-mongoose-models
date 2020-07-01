const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveCanonicalSchema } = require('./PrimitiveCanonical');
const { ResourceTypeSchema } = require('./ResourceType');

const ImplementationGuideGlobalSchema = BackboneElementSchemaFunction({
  type: ResourceTypeSchema,
  profile: PrimitiveCanonicalSchema,
  typeName: { type: String, default: 'ImplementationGuideGlobal' },
  _type: { type: String, default: 'FHIR::ImplementationGuideGlobal' },
});

class ImplementationGuideGlobal extends mongoose.Document {
  constructor(object) {
    super(object, ImplementationGuideGlobalSchema);
    this.typeName = 'ImplementationGuideGlobal';
    this._type = 'FHIR::ImplementationGuideGlobal';
  }
}

module.exports.ImplementationGuideGlobalSchema = ImplementationGuideGlobalSchema;
module.exports.ImplementationGuideGlobal = ImplementationGuideGlobal;
