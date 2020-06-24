const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { PeriodSchema } = require('./Period');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const PractitionerRoleNotAvailableSchema = BackboneElementSchemaFunction({
   description : String,
   during : PeriodSchema,
   fhirTitle: { type: String, default: 'PractitionerRoleNotAvailable' },
});

class PractitionerRoleNotAvailable extends mongoose.Document {
  constructor(object) {
    super(object, PractitionerRoleNotAvailableSchema);
    this._type = 'FHIR::PractitionerRoleNotAvailable';
  }
};


module.exports.PractitionerRoleNotAvailableSchema = PractitionerRoleNotAvailableSchema;
module.exports.PractitionerRoleNotAvailable = PractitionerRoleNotAvailable;
