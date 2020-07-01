const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const ImplementationGuideDefinitionGroupingSchema = BackboneElementSchemaFunction({
  name: PrimitiveStringSchema,
  description: PrimitiveStringSchema,
  typeName: { type: String, default: 'ImplementationGuideDefinitionGrouping' },
  _type: { type: String, default: 'FHIR::ImplementationGuideDefinitionGrouping' },
});

class ImplementationGuideDefinitionGrouping extends mongoose.Document {
  constructor(object) {
    super(object, ImplementationGuideDefinitionGroupingSchema);
    this.typeName = 'ImplementationGuideDefinitionGrouping';
    this._type = 'FHIR::ImplementationGuideDefinitionGrouping';
  }
}

module.exports.ImplementationGuideDefinitionGroupingSchema = ImplementationGuideDefinitionGroupingSchema;
module.exports.ImplementationGuideDefinitionGrouping = ImplementationGuideDefinitionGrouping;
