const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveCodeSchema } = require('./PrimitiveCode');

const TerminologyCapabilitiesCodeSystemVersionFilterSchema = BackboneElementSchemaFunction({
  code: PrimitiveCodeSchema,
  op: [PrimitiveCodeSchema],
  typeName: { type: String, default: 'TerminologyCapabilitiesCodeSystemVersionFilter' },
  _type: { type: String, default: 'FHIR::TerminologyCapabilitiesCodeSystemVersionFilter' },
});

class TerminologyCapabilitiesCodeSystemVersionFilter extends mongoose.Document {
  constructor(object) {
    super(object, TerminologyCapabilitiesCodeSystemVersionFilterSchema);
    this.typeName = 'TerminologyCapabilitiesCodeSystemVersionFilter';
    this._type = 'FHIR::TerminologyCapabilitiesCodeSystemVersionFilter';
  }
}

module.exports.TerminologyCapabilitiesCodeSystemVersionFilterSchema = TerminologyCapabilitiesCodeSystemVersionFilterSchema;
module.exports.TerminologyCapabilitiesCodeSystemVersionFilter = TerminologyCapabilitiesCodeSystemVersionFilter;
