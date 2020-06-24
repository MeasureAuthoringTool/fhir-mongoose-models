const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { TerminologyCapabilitiesCodeSystemVersionFilterSchema } = require('./TerminologyCapabilitiesCodeSystemVersionFilter');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const TerminologyCapabilitiesCodeSystemVersionSchema = BackboneElementSchemaFunction({
   code : String,
   isDefault : Boolean,
   compositional : Boolean,
   language : [String],
   filter : [TerminologyCapabilitiesCodeSystemVersionFilterSchema],
   property : [String],
   fhirTitle: { type: String, default: 'TerminologyCapabilitiesCodeSystemVersion' },
});

class TerminologyCapabilitiesCodeSystemVersion extends mongoose.Document {
  constructor(object) {
    super(object, TerminologyCapabilitiesCodeSystemVersionSchema);
    this._type = 'FHIR::TerminologyCapabilitiesCodeSystemVersion';
  }
};


module.exports.TerminologyCapabilitiesCodeSystemVersionSchema = TerminologyCapabilitiesCodeSystemVersionSchema;
module.exports.TerminologyCapabilitiesCodeSystemVersion = TerminologyCapabilitiesCodeSystemVersion;
