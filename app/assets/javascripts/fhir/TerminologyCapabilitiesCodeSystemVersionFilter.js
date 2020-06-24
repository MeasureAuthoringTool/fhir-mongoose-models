const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const TerminologyCapabilitiesCodeSystemVersionFilterSchema = BackboneElementSchemaFunction({
   code : String,
   op : [String],
   fhirTitle: { type: String, default: 'TerminologyCapabilitiesCodeSystemVersionFilter' },
});

class TerminologyCapabilitiesCodeSystemVersionFilter extends mongoose.Document {
  constructor(object) {
    super(object, TerminologyCapabilitiesCodeSystemVersionFilterSchema);
    this._type = 'FHIR::TerminologyCapabilitiesCodeSystemVersionFilter';
  }
};


module.exports.TerminologyCapabilitiesCodeSystemVersionFilterSchema = TerminologyCapabilitiesCodeSystemVersionFilterSchema;
module.exports.TerminologyCapabilitiesCodeSystemVersionFilter = TerminologyCapabilitiesCodeSystemVersionFilter;
