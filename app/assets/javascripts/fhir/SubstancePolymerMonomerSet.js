const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { SubstancePolymerMonomerSetStartingMaterialSchema } = require('./SubstancePolymerMonomerSetStartingMaterial');

const SubstancePolymerMonomerSetSchema = BackboneElementSchemaFunction({
  ratioType: CodeableConceptSchema,
  startingMaterial: [SubstancePolymerMonomerSetStartingMaterialSchema],
  typeName: { type: String, default: 'SubstancePolymerMonomerSet' },
  _type: { type: String, default: 'FHIR::SubstancePolymerMonomerSet' },
});

class SubstancePolymerMonomerSet extends mongoose.Document {
  constructor(object) {
    super(object, SubstancePolymerMonomerSetSchema);
    this.typeName = 'SubstancePolymerMonomerSet';
    this._type = 'FHIR::SubstancePolymerMonomerSet';
  }
}

module.exports.SubstancePolymerMonomerSetSchema = SubstancePolymerMonomerSetSchema;
module.exports.SubstancePolymerMonomerSet = SubstancePolymerMonomerSet;
