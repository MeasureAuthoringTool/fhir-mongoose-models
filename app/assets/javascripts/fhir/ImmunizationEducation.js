const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ImmunizationEducationSchema = BackboneElementSchemaFunction({
   documentType : String,
   reference : String,
   publicationDate : DateTime,
   presentationDate : DateTime,
   fhirTitle: { type: String, default: 'ImmunizationEducation' },
});

class ImmunizationEducation extends mongoose.Document {
  constructor(object) {
    super(object, ImmunizationEducationSchema);
    this._type = 'FHIR::ImmunizationEducation';
  }
};


module.exports.ImmunizationEducationSchema = ImmunizationEducationSchema;
module.exports.ImmunizationEducation = ImmunizationEducation;
