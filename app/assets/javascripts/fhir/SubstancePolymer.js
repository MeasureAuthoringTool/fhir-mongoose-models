const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { SubstancePolymerMonomerSetSchema } = require('./SubstancePolymerMonomerSet');
const { SubstancePolymerRepeatSchema } = require('./SubstancePolymerRepeat');

const SubstancePolymerSchema = DomainResourceSchemaFunction({
  class: CodeableConceptSchema,
  geometry: CodeableConceptSchema,
  copolymerConnectivity: [CodeableConceptSchema],
  modification: [PrimitiveStringSchema],
  monomerSet: [SubstancePolymerMonomerSetSchema],
  repeat: [SubstancePolymerRepeatSchema],
  typeName: { type: String, default: 'SubstancePolymer' },
  _type: { type: String, default: 'FHIR::SubstancePolymer' },
});

class SubstancePolymer extends mongoose.Document {
  constructor(object) {
    super(object, SubstancePolymerSchema);
    this.typeName = 'SubstancePolymer';
    this._type = 'FHIR::SubstancePolymer';
  }
}

module.exports.SubstancePolymerSchema = SubstancePolymerSchema;
module.exports.SubstancePolymer = SubstancePolymer;
