const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const SubstanceSourceMaterialOrganismHybridSchema = BackboneElementSchemaFunction({
  maternalOrganismId: PrimitiveStringSchema,
  maternalOrganismName: PrimitiveStringSchema,
  paternalOrganismId: PrimitiveStringSchema,
  paternalOrganismName: PrimitiveStringSchema,
  hybridType: CodeableConceptSchema,
  typeName: { type: String, default: 'SubstanceSourceMaterialOrganismHybrid' },
  _type: { type: String, default: 'FHIR::SubstanceSourceMaterialOrganismHybrid' },
});

class SubstanceSourceMaterialOrganismHybrid extends mongoose.Document {
  constructor(object) {
    super(object, SubstanceSourceMaterialOrganismHybridSchema);
    this.typeName = 'SubstanceSourceMaterialOrganismHybrid';
    this._type = 'FHIR::SubstanceSourceMaterialOrganismHybrid';
  }
}

module.exports.SubstanceSourceMaterialOrganismHybridSchema = SubstanceSourceMaterialOrganismHybridSchema;
module.exports.SubstanceSourceMaterialOrganismHybrid = SubstanceSourceMaterialOrganismHybrid;
