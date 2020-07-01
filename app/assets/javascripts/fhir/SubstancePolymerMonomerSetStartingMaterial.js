const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { SubstanceAmountSchema } = require('./SubstanceAmount');

const SubstancePolymerMonomerSetStartingMaterialSchema = BackboneElementSchemaFunction({
  material: CodeableConceptSchema,
  type: CodeableConceptSchema,
  isDefining: PrimitiveBooleanSchema,
  amount: SubstanceAmountSchema,
  typeName: { type: String, default: 'SubstancePolymerMonomerSetStartingMaterial' },
  _type: { type: String, default: 'FHIR::SubstancePolymerMonomerSetStartingMaterial' },
});

class SubstancePolymerMonomerSetStartingMaterial extends mongoose.Document {
  constructor(object) {
    super(object, SubstancePolymerMonomerSetStartingMaterialSchema);
    this.typeName = 'SubstancePolymerMonomerSetStartingMaterial';
    this._type = 'FHIR::SubstancePolymerMonomerSetStartingMaterial';
  }
}

module.exports.SubstancePolymerMonomerSetStartingMaterialSchema = SubstancePolymerMonomerSetStartingMaterialSchema;
module.exports.SubstancePolymerMonomerSetStartingMaterial = SubstancePolymerMonomerSetStartingMaterial;
