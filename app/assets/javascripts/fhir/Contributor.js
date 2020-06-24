const mongoose = require('mongoose/browser');
const { ContactDetailSchema } = require('./ContactDetail');
const { ContributorTypeSchema } = require('./ContributorType');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ContributorSchema = ElementSchemaFunction({
   type : ContributorTypeSchema,
   name : String,
   contact : [ContactDetailSchema],
   fhirTitle: { type: String, default: 'Contributor' },
});

class Contributor extends mongoose.Document {
  constructor(object) {
    super(object, ContributorSchema);
    this._type = 'FHIR::Contributor';
  }
};


module.exports.ContributorSchema = ContributorSchema;
module.exports.Contributor = Contributor;
