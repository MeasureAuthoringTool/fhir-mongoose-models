const mongoose = require('mongoose/browser');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { ReferenceSchema } = require('./Reference');
const { ResearchSubjectStatusSchema } = require('./ResearchSubjectStatus');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ResearchSubjectSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   status : ResearchSubjectStatusSchema,
   period : PeriodSchema,
   study : ReferenceSchema,
   individual : ReferenceSchema,
   assignedArm : String,
   actualArm : String,
   consent : ReferenceSchema,
   fhirTitle: { type: String, default: 'ResearchSubject' },
});

class ResearchSubject extends mongoose.Document {
  constructor(object) {
    super(object, ResearchSubjectSchema);
    this._type = 'FHIR::ResearchSubject';
  }
};


module.exports.ResearchSubjectSchema = ResearchSubjectSchema;
module.exports.ResearchSubject = ResearchSubject;
