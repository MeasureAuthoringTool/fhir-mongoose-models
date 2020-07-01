const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { GuideParameterCodeSchema } = require('./GuideParameterCode');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const ImplementationGuideDefinitionParameterSchema = BackboneElementSchemaFunction({
  code: GuideParameterCodeSchema,
  value: PrimitiveStringSchema,
  typeName: { type: String, default: 'ImplementationGuideDefinitionParameter' },
  _type: { type: String, default: 'FHIR::ImplementationGuideDefinitionParameter' },
});

class ImplementationGuideDefinitionParameter extends mongoose.Document {
  constructor(object) {
    super(object, ImplementationGuideDefinitionParameterSchema);
    this.typeName = 'ImplementationGuideDefinitionParameter';
    this._type = 'FHIR::ImplementationGuideDefinitionParameter';
  }
}

module.exports.ImplementationGuideDefinitionParameterSchema = ImplementationGuideDefinitionParameterSchema;
module.exports.ImplementationGuideDefinitionParameter = ImplementationGuideDefinitionParameter;
